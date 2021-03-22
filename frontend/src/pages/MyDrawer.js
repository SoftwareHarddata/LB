import React from "react";
import {makeStyles, Drawer, Divider} from "@material-ui/core";
import Lists from "../components/Lists";

const drawerWidth =240;

const myStyles = makeStyles(theme => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,

    },
    drawerPaper: {
        width: drawerWidth,
    },
    toolbar : theme.mixins.toolbar,

}))

export default function MyDrawer (){

    const classes = myStyles()

    return (

        <div>
            <Drawer
                className={classes.drawer}
                variant='permanent'
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor='left'
            >
                <div className={classes.toolbar}></div>
                <Divider/>
                <Lists/>

            </Drawer>
        </div>
    )
}