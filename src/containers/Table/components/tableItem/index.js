import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { useForm } from "react-hook-form";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";


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
    root: {
        marginTop: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    title: {
        textAlign: 'center'
    },
    input: {
        width: 500,
    }

}));

const TableItem = ({ user }) => {
    const classes = useStyles();
    const history = useHistory();
    const [userId, setUserId] = useState([])
    const {
        register,
        handleSubmit,
    } = useForm();
    const loc = useLocation();
    console.log(loc);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${loc.pathname.slice(7)}`)
            .then((response) => response.json())
            .then((data) => setUserId(data))
            .catch((error) => console.log(error.message));
    }, [loc.pathname]);

    const onSubmit = (data) => saveData(data);

    const saveData = async (val) => {
        await fetch(`https://jsonplaceholder.typicode.com/posts`, {
            method: 'POST',
            body: JSON.stringify(val),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }

    const { company, address, ...users } = userId

    const result = Object.entries(users).map((item, i) => {
        return <TextField
            className={classes.input}
            key={i++}
            id={item[0]}
            name={item[0]}
            label={item[0]}
            defaultValue={item[1]}
            InputProps={{
                readOnly: false,
            }}
            {...register(item[0])} />
    })

    return (
        <>
            <h2 className={classes.title}>User: {userId.name}</h2>
            <div className={classes.paper}>
                <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
                    {result}
                    {user ?
                        <Button type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}>
                            Change
                        </Button> :
                        <Button type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            disabled>
                            Change
                        </Button>}
                </form>
            </div>
        </>
    )
}

export default TableItem;