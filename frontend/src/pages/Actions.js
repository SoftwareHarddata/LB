import React, {useEffect} from "react";
import {Button, Hidden, makeStyles, Typography} from "@material-ui/core";
import styled from "styled-components/macro";
import NavbarComponent from "../components/NavbarComponent";
import MyDrawer from "./MyDrawer";
import MUI_Card from "../components/MUI_Card";
import {useParams} from "react-router-dom";


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
export default function Actions ({messages, loggedUser, token, setToken}){

    const classes = myStyles()
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [categoryVar, setCategoryVar] = React.useState('');
    const [filteredList, setFilteredList] = React.useState([]);


    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen)
    }

    let { category } = useParams();
    const urlParam = "berufundprivate";

    const checkCategory = (urlParam) => {
        if(urlParam==='gesundheit'){
            return setCategoryVar("Gesundheit")
        }
        else if(urlParam==='personlichkeit'){
            return setCategoryVar("Personlichkeit")
        }
        else if(urlParam==='berufundprivate'){
            return setCategoryVar("Berufs- und Privatleben")
        }
        else if(urlParam==='social'){
            return setCategoryVar("Social")
        }
        else if(urlParam==='sinn'){
            return setCategoryVar("Sinn")
        }


    }


    useEffect(() => {
        // ... ...
        console.log('urlParam '+urlParam)
        checkCategory(category)
        console.log('categoryVar '+categoryVar)
        console.log('category '+category)


        const filteredList = messages?.filter((message) => message?.category === categoryVar)
        setFilteredList(filteredList)

    }, [messages, loggedUser, token, category])



    return (

        <AppContainer>
            <NavbarComponent handleDrawerToggle={handleDrawerToggle}
                             loggedUser={loggedUser} setToken={setToken} />
            <Hidden lgDown>
                <MyDrawer
                    variant='permanent'
                    open ={true}
                />
            </Hidden>
            <Hidden xlUp>
                <MyDrawer
                    variant='temporary'
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                />
            </Hidden>

            <Test>
                <div className={classes.toolbar}></div>
                <Content className={classes.content}>

                    {filteredList?.map((itemMessage) => (

                    <MUI_Card randomItem={itemMessage} loggedUser={loggedUser}/>
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
  align-items: center;
  justify-content: center;
  background: #d6cbbc;
  
`

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`

const Test = styled.div`
  //overflow-y: scroll;
  padding: 0 16px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 5px
`