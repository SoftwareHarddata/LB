import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import MYButton from "./MyButton";

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
        //width: '50%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export default function LikeButtonWithSnackbar({onClick, onClose, isOpen}) {
    const classes = useStyles();
    /* const [open, setOpen] = React.useState(false);

   const handleClick = () => {
         setOpen(true);
     };

     const handleClose = (event, reason) => {
         if (reason === 'clickaway') {
             return;
         }
         setOpen(false);
     };*/

    return (
        <>
            <MYButton name='mehr davon' iconName={<ThumbUpIcon/>} onClick={onClick} id="mybutton"/>
            <div className={classes.root} id="test">
            <Snackbar className="mySnack" open={isOpen} autoHideDuration={1200} onClose={onClose}>
                <Alert onClose={onClose} severity="success">
                    Done!
                </Alert>
            </Snackbar>
            </div>
        </>
    );
}
