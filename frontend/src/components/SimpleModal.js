import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import InfoIcon from "@material-ui/icons/Info";
import MYButton from "./Buttons/MyButton";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    //const top = 0 + rand();
    //const left = 0 + rand();

    const top = 10 ;
    const left = 10;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 330,
        backgroundColor: "#d6cbbc",
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function SimpleModal({randomItem}) {
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">{randomItem?.titel}</h2>
            <p id="simple-modal-description">
                {randomItem?.more_infos}
            </p>
            <p>Pagination allows us to return just a subset of a whole result in a Page. This is useful, for example, when navigating through several pages of data on a web page.

                Another advantage of pagination is that the amount of data sent from server to client is minimized. By sending smaller pieces of data, we can generally see an improvement in performance.</p>
            <MYButton name='Experten (not working)' iconName={<ContactPhoneIcon/>}/>
        </div>
    );

    return (
        <div>
            <MYButton name='infos' iconName={<InfoIcon/>} onClick={handleOpen}/>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    );
}
