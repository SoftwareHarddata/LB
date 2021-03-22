import React from "react";
import {Typography, withWidth, Hidden, Button} from "@material-ui/core";


function HiddenComponent(props){
    return (
        <>
            <Typography variant='h6' color='initial'>
                Width: {props.width}
            </Typography>

            {/*down: hidden, up: show*/}
            <Hidden xsDown>
                <Button variant='contained' color='primary'>
                    xs
                </Button>
            </Hidden>
            <Hidden smDown>
                <Button variant='contained' color='primary'>
                    sm
                </Button>
            </Hidden>
            <Hidden mdUp>
                <Button variant='contained' color='primary'>
                    md
                </Button>
            </Hidden>
            <Hidden only={['md', 'lg']}>
                <Button variant='contained' color='primary'>
                    lg
                </Button>
            </Hidden>
        </>
    )
}

export default withWidth()(HiddenComponent)