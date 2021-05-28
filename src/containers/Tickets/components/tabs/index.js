import './tabs.css';
import React from 'react';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    btn: {
        backgroundColor: theme.palette.primary.main,
        color: 'white',
        width: 160,
        heigth: 50
    },
    customWidth: {
        maxWidth: 500,
    },
    noMaxWidth: {
        maxWidth: 'none',
    },
}));


const Tabs = ({ getValueFromToolBar }) => {
    const classes = useStyles();
    const tabsName = ['Самый Дешевый', 'Самый Быстрый', 'Оптимальный'];
    return (
        <div className='tab__container'>
            {tabsName.map((item, i) => <Tooltip TransitionComponent={Zoom} title={item}><Button key={i} id={i} onClick={(event) => getValueFromToolBar(event)} className={classes.btn}>{item}</Button></Tooltip>)}
        </div>
    );
}

export default Tabs