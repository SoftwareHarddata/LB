


import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import LocalPhoneOutlinedIcon from '@material-ui/icons/LocalPhoneOutlined';
import AlternateEmailOutlinedIcon from '@material-ui/icons/AlternateEmailOutlined';
import VideocamOutlinedIcon from '@material-ui/icons/VideocamOutlined';
import PeopleOutlineOutlinedIcon from '@material-ui/icons/PeopleOutlineOutlined';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import StarsIcon from '@material-ui/icons/Stars';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        backgroundColor: '#cbe0f8',
        color: "#1d253b",
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: '#1d253b',
    },
}));

export default function DataTable({token, experten, loggedUser, messages, setToken}) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    console.log('experten.category '+experten?.category)

    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        R
                    </Avatar>
                }
                /* action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                } */
                title={experten.category}
                subheader={`${experten.subcategory}, 
                plz: ${experten.plz}`}
            />

            <CardContent>
                <div>
                    <IconButton aria-label="verifiziert" disabled={!experten.verified}>
                        <VerifiedUserIcon fontSize='small'/> <Typography variant="caption" color="textSecondary" component="p">
                        verifiziert </Typography>
                    </IconButton>

                    <IconButton aria-label="Premium" disabled={!experten.premium}>
                        <StarsIcon fontSize='small'/> <Typography variant="caption" color="textSecondary" component="p">
                        Premium </Typography>
                    </IconButton>

                </div>

                <Typography variant="body2" color="textSecondary" component="p">
                    {experten.titel} {experten.firstname} {experten.lastname}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>

                <IconButton aria-label="phone" disabled={!experten.hasTel}>
                    <LocalPhoneOutlinedIcon />
                </IconButton>
                <IconButton aria-label="email" disabled={!experten.hasEmail}>
                    <AlternateEmailOutlinedIcon />
                </IconButton>
                <IconButton aria-label="Videocam" disabled={!experten.hasVideo}>
                    <VideocamOutlinedIcon />
                </IconButton>
                <IconButton aria-label="faceToFace" disabled={true}>
                    <PeopleOutlineOutlinedIcon />
                </IconButton>

                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <InfoOutlinedIcon />
                </IconButton>

            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>Kontaktdaten:</Typography>
                    <Typography paragraph>
                        Adresse: {experten.adresse}, {experten.plz} <br/>
                        Tel.: {experten.tel} <br/>
                        Email: {experten.email} <br/>
                    </Typography>
                    <br/>
                    <Typography paragraph>
                        {experten.infotext}
                    </Typography>
                    <Typography>
                        Rufen Sie gerne an!
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}


