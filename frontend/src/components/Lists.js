import React, {useEffect} from "react";
import {
    List, ListItem, ListItemIcon,
    ListItemText, Divider, Button, IconButton
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

import ListSubheader from '@material-ui/core/ListSubheader';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FavoriteIcon from '@material-ui/icons/Favorite';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import GroupIcon from '@material-ui/icons/Group';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {Link, NavLink} from "react-router-dom";
import Tooltip from "@material-ui/core/Tooltip";
import FilterIcon from '@material-ui/icons/Filter';
import {getActionsFromUser} from "../services/actionsService";


const useStyles = makeStyles((theme) => ({
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));
export default function Lists ({setToken, loggedUser}){
    const classes = useStyles();

    console.log('vor useEffect loggedUser '+loggedUser)
    useEffect(() => {
        // ...
        console.log('nach useEffect loggedUser '+loggedUser)
    }, [loggedUser])

    return (
        <>
            <List component='nav'
                  subheader={
                      <ListSubheader component="div" id="nested-list-subheader">
                          Menu
                      </ListSubheader>
                  }
            >
                {/*// todo: to do*/}
                {/*<ListItem button>
                    <ListItemIcon>
                        <AccountCircleIcon fontSize='default'/>
                    </ListItemIcon>
                    <ListItemText
                        primary='Mein Profil' />
                </ListItem>*/}

                {/*// todo: fix it. loggedUser undefined*/}
                {/*<Link to={`/user/favoriten/${loggedUser?.idUserSingUp}/watchlist`}>
                <ListItem button>
                    <ListItemIcon>
                        <FavoriteIcon fontSize='default'/>
                    </ListItemIcon>
                    <ListItemText
                        primary='Favoriten' />
                </ListItem>
                </Link>*/}


                <Link to="/user/messages">
                <ListItem button>
                    <ListItemIcon>
                        <FilterIcon fontSize='default'/>
                    </ListItemIcon>
                    <ListItemText
                        primary='Entdecken' />
                </ListItem>
                </Link>

                <Divider/>

                <div className={classes.nested}>

                    <Link to="/user/category/gesundheit">
                    <ListItem button>
                        <ListItemIcon>
                            <InsertEmoticonIcon fontSize='small'/>
                        </ListItemIcon>
                        <ListItemText
                            secondary='Gesundheit' />
                    </ListItem>
                    </Link>

                    <Link to="/user/category/social">
                    <ListItem button>
                        <ListItemIcon>
                            <GroupIcon fontSize='small'/>
                        </ListItemIcon>
                        <ListItemText
                            secondary='Social' />
                    </ListItem>
                    </Link>

                    <Link to="/user/category/berufundprivate">
                    <ListItem button>
                        <ListItemIcon>
                            <LaptopMacIcon fontSize='small'/>
                        </ListItemIcon>
                        <ListItemText
                            secondary='Berufs- & Privatleben' />
                    </ListItem>
                    </Link>

                    <Link to="/user/category/personlichkeit">
                    <ListItem button>
                        <ListItemIcon>
                            <EmojiPeopleIcon fontSize='small'/>
                        </ListItemIcon>
                        <ListItemText
                            secondary='Persönlichkeit' />
                    </ListItem>
                    </Link>

                    <Link to="/user/category/sinn">
                    <ListItem button>
                        <ListItemIcon>
                            <EmojiObjectsIcon fontSize='small'/>
                        </ListItemIcon>
                        <ListItemText
                            secondary='Sinn' />
                    </ListItem>
                    </Link>

                    <Divider/>

                    {/*// todo: to do*/}
                    {/*<ListItem button>
                        <ListItemIcon>
                            <LibraryBooksIcon fontSize='default'/>
                        </ListItemIcon>
                        <ListItemText
                            primary='Datenschutz' />
                    </ListItem>*/}

                    <NavLink to="/user/login" activeClassName="active">
                    <ListItem button onClick={()=> setToken(undefined)}>
                        <ListItemIcon>
                            <ExitToAppIcon fontSize='default'/>
                        </ListItemIcon>
                        <ListItemText
                            primary='Logout' />
                    </ListItem>
                        </NavLink>
                </div>






            </List>
        </>
    )
}