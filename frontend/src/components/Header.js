import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import NavbarComponent from "./NavbarComponent";
import {Hidden} from "@material-ui/core";
import MyDrawer from "../pages/MyDrawer";


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'scroll',
        flexGrow:'1',
        backgroundColor: "ghostwhite",
    },
    toolbar : theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        backgroundColor: theme.palette.background.default,
    },
}));

export default function Header( {setToken, loggedUser}) {

    const classes = useStyles();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen) }


    return (
        <>
            <NavbarComponent handleDrawerToggle={handleDrawerToggle}
                             loggedUser={loggedUser}/>
            <div className={classes.toolbar}></div>
            <Hidden lgDown>
                <MyDrawer
                    setToken={setToken}
                    loggedUser={loggedUser}
                    variant='permanent'
                    open ={true}
                />
            </Hidden>

            <Hidden xlUp>
                <MyDrawer
                    setToken={setToken}
                    loggedUser={loggedUser}
                    variant='temporary'
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                />
            </Hidden>
        </>
    );
}
