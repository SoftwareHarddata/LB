import React from "react";
import {List, ListItem, ListItemIcon,
    ListItemText, Divider} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";


import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FavoriteIcon from '@material-ui/icons/Favorite';

import SearchIcon from '@material-ui/icons/Search';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import GroupIcon from '@material-ui/icons/Group';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


const useStyles = makeStyles((theme) => ({
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));
export default function Lists (){
    const classes = useStyles();

    return (
        <>
            <List component='nav'>
                <ListItem button>
                    <ListItemIcon>
                        <AccountCircleIcon fontSize='default'/>
                    </ListItemIcon>
                    <ListItemText
                        primary='Mein Profil' />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <FavoriteIcon fontSize='default'/>
                    </ListItemIcon>
                    <ListItemText
                        primary='Favoriten' />
                </ListItem>

                <ListItem button>
                    <ListItemIcon>
                        <SearchIcon fontSize='default'/>
                    </ListItemIcon>
                    <ListItemText
                        primary='Entdecken' />
                </ListItem>
                <Divider/>

                <div className={classes.nested}>
                    <ListItem button>
                        <ListItemIcon>
                            <InsertEmoticonIcon fontSize='small'/>
                        </ListItemIcon>
                        <ListItemText
                            secondary='Gesundheit' />
                    </ListItem>

                    <ListItem button>
                        <ListItemIcon>
                            <GroupIcon fontSize='small'/>
                        </ListItemIcon>
                        <ListItemText
                            secondary='Social' />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <LaptopMacIcon fontSize='small'/>
                        </ListItemIcon>
                        <ListItemText
                            secondary='Karriere' />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <EmojiPeopleIcon fontSize='small'/>
                        </ListItemIcon>
                        <ListItemText
                            secondary='Persönlichkeit' />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <EmojiObjectsIcon fontSize='small'/>
                        </ListItemIcon>
                        <ListItemText
                            secondary='Sinn' />
                    </ListItem>

                    <Divider/>
                    <ListItem button>
                        <ListItemIcon>
                            <LibraryBooksIcon fontSize='default'/>
                        </ListItemIcon>
                        <ListItemText
                            primary='Datenschutz' />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <ExitToAppIcon fontSize='default'/>
                        </ListItemIcon>
                        <ListItemText
                            primary='Logout' />
                    </ListItem>
                </div>






            </List>
        </>
    )
}