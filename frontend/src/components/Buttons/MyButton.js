import Button from "@material-ui/core/Button";
import {makeStyles, ThemeProvider} from "@material-ui/core/styles";
import theme from "../../themeConfig";
import {Hidden} from "@material-ui/core";
import React, {useEffect} from "react";
import CircularIndeterminate from "../CircularIndeterminate";
import styled from "styled-components/macro";

const useStyles = makeStyles({
    buttonSend: {
        //background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        //boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: '1D253B',
        height: 30,
        padding: '0 10px',
        display: "flex",
        justifyContent: "center"
    },
})

export default function MyButton({name, iconName, onClick, headColor}) {

    useEffect(() => {
        console.log("..........")
        console.log('headc from myBotton '+ headColor)

        if (!headColor) {
            console.log("waiting")
            return <WaitingStyle> <CircularIndeterminate/> <p color='#000000'>Loading!!!</p> <CircularIndeterminate/> </WaitingStyle>
            /*<section>
                <p>Waiting!!!</p>
            </section>*/
        }
    },  [headColor])

    const classes = useStyles();
    return(
        // todo: responsive text bei width auto
        <ThemeProvider theme={theme}>
            <Button
                className={classes.buttonSend}
                    style={{
                        background: headColor,
                    }}
                    type="button"
                    onClick={onClick}
                    startIcon={iconName}


            >
                <Hidden xlDown>{name}</Hidden>
            </Button>

        </ThemeProvider>
    )
}

const WaitingStyle = styled.section`
  background: white;
`