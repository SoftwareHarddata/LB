import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styled from "styled-components/macro";
import Button_MUI from "./Buttons/Button_MUI";
import createTypography from "@material-ui/core/styles/createTypography";
import MyButton from "./Buttons/MyButton";
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';import FavoriteIcon from '@material-ui/icons/Favorite';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import InfoIcon from '@material-ui/icons/Info';
import SimpleModal from "./SimpleModal";
import LikeButtonWithSnackbar from "./Buttons/LikeButtonWithSnackbar";

const useStyles = makeStyles({
    root: {
        maxWidth: '100%',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',

        flexGrow: 1,
        /* for Firefox */
        minHeight: 0,
    },
});

export default function MUI_CardHome({randomItem}) {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <Card className={classes.root}>
            <div>
            <CardActionArea>
                <CardHeader>
                    <Titel><h4>{randomItem?.titel}</h4></Titel>
                    <Category>{randomItem?.category}</Category>
                </CardHeader>

                <CardContent>
                    <ContentSection>
                        <h5>{randomItem?.subcategory}</h5>

                        <ContentText>{randomItem?.content}</ContentText>

                         Call to action!!
                    </ContentSection>
                </CardContent>
            </CardActionArea>
            <CardButtons>
                <LikeButtonWithSnackbar onClick={handleClick} onClose={handleClose} isOpen={open}/>
                {/*<MyButton name='mehr davon' iconName={<ThumbUpIcon/>}/>*/}
                <MyButton name='save' iconName={<FavoriteIcon/>}/>
                <MyButton name='Experten' iconName={<ContactPhoneIcon/>}/>
                <SimpleModal randomItem={randomItem}/>
            </CardButtons>
        </div>
</Card>
    );
}

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  background: #e3c9a8;
  justify-content: space-around;
  flex-wrap: wrap;
`
const Category = styled.div`
  display: flex;
  border-radius: 6px;
  border: 2px solid #fff;
  padding: 4px;
  margin: 12px;
  text-align: center;
  flex-wrap: wrap;
`
//frage: @media
const Titel = styled.div`
  display: flex;
  margin: 12px 0 0 12px;
  @media all and (min-width: 359px){
    .h4{font-size: small;}
  }
`

const CardButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 5px;
  justify-content: space-around;
  gap: 5px;
`

const ContentSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  word-break: break-word;
  flex-grow: 1;
  /* for Firefox */
  min-height: 0;
`

const ContentText = styled.p`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  word-break: break-word;
  background: crimson;

  flex-grow: 1;
  overflow: auto;
  /* for Firefox */
  min-height: 0;
`
