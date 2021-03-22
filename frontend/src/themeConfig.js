import {createMuiTheme} from "@material-ui/core/styles";
import purple from '@material-ui/core/colors/purple'

const theme = createMuiTheme({
    palette:{
        primary:{
            //main: '#999'
            main: purple[500]
        }
    }
})

export default theme