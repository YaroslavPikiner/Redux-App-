import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useAuth } from '../../hooks/use-auth';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },

}));

const Login = () => {
    const classes = useStyles();
    const history = useHistory();
    const auth = useAuth();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();


    const onSubmit = (data) => {
        let status = auth.signin(data.login, data.password);
        if (status) {
            history.push("/table");
            
        }
    };

    return (
        <div className={classes.paper} >
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
            </Avatar>
            <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    fullWidth
                    id="email"
                    name="email"
                    label="Email"
                    {...register('login', { required: true })}
                />
                {errors.exampleRequired && <span>This field is required</span>}
                <TextField
                    fullWidth
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    {...register('password', { required: true })}
                />
                {errors.exampleRequired && <span>This field is required</span>}
                <Button type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}>
                    Submit
                </Button>
            </form>
        </div>
    );
};

export default Login;