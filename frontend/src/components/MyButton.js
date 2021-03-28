import Button from "@material-ui/core/Button";
import {makeStyles, ThemeProvider} from "@material-ui/core/styles";
import theme from "../themeConfig";
import {Hidden} from "@material-ui/core";

const useStyles = makeStyles({
    buttonSend: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 30,
        padding: '0 10px',
        display: "flex",
        justifyContent: "center"

    },
})

export default function MYButton({name, iconName}) {
    const classes = useStyles();
    return(
        <ThemeProvider theme={theme}>
            <Button className={classes.buttonSend}
                    text
                    startIcon={iconName}>
                <Hidden xsDown>{name}</Hidden>
            </Button>

        </ThemeProvider>
    )
}