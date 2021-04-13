import React, {useEffect} from "react";
import {Button, Hidden, makeStyles, Typography} from "@material-ui/core";
import styled from "styled-components/macro";
import NavbarComponent from "../components/NavbarComponent";
import MyDrawer from "./MyDrawer";
import MUI_Card from "../components/MUI_Card";
import {useParams} from "react-router-dom";
import Header from "../components/Header";


const myStyles = makeStyles(theme => ({
    root: {
        display: 'flex'
    },
    toolbar : theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        padding: theme.spacing(3)
    },
}))
export default function MessagesByCategory ({messages, loggedUser, token, setToken}){

    const classes = myStyles()
    const [categoryVar, setCategoryVar] = React.useState('');
    const [filteredList, setFilteredList] = React.useState([]);




    let { category } = useParams();
    //const urlParam = "berufundprivate";

    const checkCategory = (urlParam) => {
        if(urlParam==='gesundheit'){
            return "Gesundheit"
        }
        else if(urlParam==='personlichkeit'){
            return "Personlichkeit"
        }
        else if(urlParam==='berufundprivat'){
            return "Berufs- und Privatleben"
        }
        else if(urlParam==='social'){
            return "Social"
        }
        else if(urlParam==='sinn'){
            return "Sinn"
        }
    }


    useEffect(() => {
        // keine große Daten: frontend, sonst backend
        //console.log('urlParam '+urlParam)

        const checkedCategory = checkCategory(category)
        if (checkCategory){
            setCategoryVar(checkedCategory)
            const filteredList = messages?.filter((message) => message?.category === checkedCategory)
            setFilteredList(filteredList)
        }
        console.log('categoryVar '+categoryVar)
        console.log('category '+category)

    }, [messages, loggedUser, token, category])



    return (

        <AppContainer>
            <Header loggedUser={loggedUser} setToken={setToken} />

            {/*<Test>
                <div className={classes.toolbar}></div>
                <Content >
                    {filteredList?.map((itemMessage) => (
                    <MUI_Card randomItem={itemMessage} loggedUser={loggedUser}/>
                    ))}
                </Content>
            </Test>*/}

            <Test>
                <div className={classes.toolbar}></div>
                <Content >
                    {filteredList?.map((itemMessage) => (
                        <li>
                          <MUI_Card randomItem={itemMessage} loggedUser={loggedUser}/>
                        </li>
                    ))}
                </Content>
            </Test>

        </AppContainer>
    )
}

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  //align-items: center;
  //justify-content: center;
  background: #F1F1F1; // E5E7F4 A8AAB5
  overflow-y: scroll;

`

const Content = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 40px;
  
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  overflow-y: auto;
  margin-bottom: 20px;
  gap: 10px;

  li {
    margin: 10px;
  };
/*li+li {
  margin: 10px;
}*/
`

const Test = styled.div`
  //padding: 0 16px;
  display: flex;
  padding-top: 40px;
`