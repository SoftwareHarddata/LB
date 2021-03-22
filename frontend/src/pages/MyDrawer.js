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

export default function MyDrawer (props){

    const classes = myStyles()

    return (

        <div>
            <Drawer
                className={classes.drawer}
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor='right'
                variant={props.variant}
                open={props.open}
                onClose={props.onClose ? props.onClose : null}
            >
                <div className={classes.toolbar}></div>
                <Divider/>
                <Lists/>

            </Drawer>
        </div>
    )
}