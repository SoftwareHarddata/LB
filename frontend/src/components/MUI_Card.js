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
import Button_MUI from "./Button_MUI";
import createTypography from "@material-ui/core/styles/createTypography";
import MYButton from "./MyButton";
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';import FavoriteIcon from '@material-ui/icons/Favorite';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles({
    root: {
        maxWidth: '80%',
    },
});

export default function MUI_Card({randomItem}) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardHeader>
                    <Titel><h4>Titel</h4></Titel>
                    <Category>category</Category>
                </CardHeader>

                <CardContent>
                    <Content>
                        <h5>subcategory</h5>
                        <br/>
                        <p>content</p>
                        <br/>
                        <br/>
                         Call to action!!!
                    </Content>
                </CardContent>
            </CardActionArea>
            <CardButtons>
                <MYButton name='mehr davon' iconName={<ThumbUpIcon/>}/>
                <MYButton name='save' iconName={<FavoriteIcon/>}/>
                <MYButton name='mehr infos' iconName={<InfoIcon/>}/>
                <MYButton name='Experten' iconName={<ContactPhoneIcon/>}/>
            </CardButtons>
        </Card>
    );
}

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  background: #e3c9a8;
  justify-content: space-around;
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

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
`
