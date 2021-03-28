import React from "react";
import {Hidden, makeStyles, Typography} from "@material-ui/core";
import MyDrawer from "../pages/MyDrawer";
import NavbarComponent from "./NavbarComponent";
import HiddenComponent from "./HiddenComponent";

const drawerWidth =240;

const myStyles = makeStyles(theme => ({
    root: {
        display: 'flex'
    },
    toolbar : theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        backgroundColor: theme.palette.background.paper,
    },

}))

export default function ContainerComponent (){

    const classes = myStyles()
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen)
    }
    return (
        <div className={classes.root}>
            <NavbarComponent handleDrawerToggle={handleDrawerToggle}/>
            <div className={classes.content}>
            <div className={classes.toolbar}></div>

                <Typography paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
                    facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
                    gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
                    donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                    adipiscing bibendum est ultricies integer quis.
                </Typography>
            </div>

            <Hidden lgDown>
                <MyDrawer
                    variant='permanent'
                    open ={true}
                />
            </Hidden>

            <Hidden xlUp>
                <MyDrawer
                    variant='temporary'
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                />
            </Hidden>


        </div>
    )
}