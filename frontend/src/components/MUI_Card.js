import React, {useEffect} from 'react';
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
import {postAction} from "../services/actionsService";
import {getLoggedUser} from "../services/userService";
import {Link, useParams} from "react-router-dom";
import CircularIndeterminate from "./CircularIndeterminate";

const useStyles = makeStyles({
    root: {
        // todo: mediaQuery
        width: '350px',
        maxWidth: '350px',
        minWidth: '350px',
        height: '450px',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        overflowY: 'scroll',

        flexGrow: 1,
        /* for Firefox */
        minHeight: 0,

    },
});

export default function MUI_Card({randomItem, loggedUser}) {

    const [headColor, setHeadColor] = React.useState('');

    const checkRandomItemForColor= (randomItem) => {
        if(randomItem.category==='Gesundheit'){
            return "#89A9CD"
        }
        else if(randomItem.category==='Personlichkeit'){
            return "#89A9CD"
        }
        else if(randomItem.category==='Berufs- und Privatleben'){
            return "#89A9CD"
        }
        else if(randomItem.category==='Social'){
            return '#89A9CD'
            //'linear-gradient(to right, #00c6ff, #0072ff)'
                //'#0a18ab'
        }
        else if(randomItem==='Sinn'){
            return "#89A9CD"
        }
    }

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const [categoryVar, setCategoryVar] = React.useState('');

    const checkCategoryForUrl = (Category) => {
        if(Category==='Gesundheit'){
            return "gesundheit"
        }
        else if(Category==='Personlichkeit'){
            return "personlichkeit"
        }
        else if(Category==='Berufs- und Privatleben'){
            return "berufundprivat"
        }
        else if(Category==='Social'){
            return "social"
        }
        else if(Category==='Sinn'){
            return "sinn"
        }
    }

    useEffect(() => {
            console.log("..........")
            console.log(loggedUser)

        const checkedColor = checkRandomItemForColor(randomItem)
        if (checkRandomItemForColor){
            setHeadColor(checkedColor)
        }
        console.log("..........")
        console.log(checkedColor)
        console.log('headc '+headColor)

        if (!headColor) {
            console.log("waiting")
            return <WaitingStyle> <CircularIndeterminate/> <p color='#000000'>Loading!!!</p> <CircularIndeterminate/> </WaitingStyle>
            /*<section>
                <p>Waiting!!!</p>
            </section>*/
        }

        const checkedCategoryForUrl = checkCategoryForUrl(randomItem?.category)
        if (checkCategoryForUrl){
            setCategoryVar(checkedCategoryForUrl)
        }
        console.log('categoryVar from MUI_Card'+categoryVar)


    },  [loggedUser, randomItem, headColor, categoryVar])

   /* const handleClick = () => {
        setOpen(true);
    };*/

    const handleClickWatchlist = () => {
        postAction(loggedUser?.idUserSingUp, randomItem?.id_message, "watchlist")
    };

    const handleClickMore = () => {
        setOpen(true);
        postAction(loggedUser?.idUserSingUp, randomItem?.id_message, "clickedLike")
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <Card className={classes.root}>

                <CardActionArea>
                    <CardHeader
                        style={{

                            background: headColor,
                        }}
                    >
                        <Titel><h4>{randomItem?.titel}</h4></Titel>
                        <Category>{randomItem?.category}</Category>
                    </CardHeader>
                </CardActionArea>

            <Wrapper>
                <ContentSection>
                    <h5>{randomItem?.subcategory}</h5>
                    <ContentText>{randomItem?.content}</ContentText>
                    Call to action!!
                </ContentSection>

                <CardButtons>
                    <LikeButtonWithSnackbar headColor='#89A9CD' onClick={handleClickMore} onClose={handleClose} isOpen={open}/>
                    {/*<MyButton name='mehr davon' iconName={<ThumbUpIcon/>}/>*/}
                    <MyButton headColor='#89A9CD' onClick={handleClickWatchlist} name='save' iconName={<FavoriteIcon/>}/>
                    <Link to={`/user/experten/${categoryVar}`}> <MyButton headColor='#89A9CD' name='Experten' iconName={<ContactPhoneIcon/>}/></Link>
                    <SimpleModal headColor='#89A9CD' randomItem={randomItem}/>
                </CardButtons>
            </Wrapper>
        </Card>
    );
}

const CardHeader = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  //background: #e3c9a8;
  justify-content: center;
  flex-wrap: wrap;
  Flex: 1 1 auto;

  color: #1d253b;
`
const Category = styled.div`
  display: flex;
  border-radius: 6px;
  border: 2px solid #fff;
  padding: 4px;
  margin: 0 12px 12px 12px;
  text-align: center;
  flex-wrap: wrap;
`
//frage: @media
const Titel = styled.div`
  display: flex;
  margin: 12px 0 0 0px;
 /* @media all and (min-width: 359px){
    .h4{font-size: small;}
  }*/
`

const CardButtons = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 5px;
  //gap: 10px;
  background: #cbe0f8;
`

const ContentSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  word-break: break-word;
  /* for Firefox */
  min-height: 0;
  padding: 16px;
  height: auto;
  flex-grow: 1;
  font-weight: 500;
  background: linear-gradient(to bottom, #99b7d8, #99b7d8, #aac4e2, #bad2ed, #cbe0f8); // F1F1F1

`

const ContentText = styled.p`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  word-break: break-word;
  //background: crimson;

  flex-grow: 1;
  //overflow: auto;
  /* for Firefox */
  min-height: 0;
`

const Wrapper = styled.div`
  //display: grid;
  //grid-template-columns: auto 1fr;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`
const WaitingStyle = styled.section`
  background: white;
`