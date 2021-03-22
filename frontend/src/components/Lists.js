import React from "react";
import {List, ListItem, ListItemIcon,
    ListItemText, Divider} from "@material-ui/core";

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive';

export default function Lists (){
    return (
        <>
            <List component='nav'>
                <ListItem button>
                    <ListItemIcon>
                        <AccountCircleIcon/>
                    </ListItemIcon>
                    <ListItemText
                        primary='icon-text' />
                </ListItem>

                <Divider/>

                <ListItem button>
                    <ListItemIcon>
                        <AirplanemodeActiveIcon/>
                    </ListItemIcon>
                    <ListItemText
                        primary='icon2-text' />
                </ListItem>

            </List>
        </>
    )
}