import React from "react";
import {makeStyles, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing(2),
    },
}));

function Header(props){
    const classes = useStyles()

    return (
        <Grid container
              direction="row"
              justify="center"
              alignItems="center" >
            <Grid item xs={2} >
                <span>Cargo Planner</span>
            </Grid>
            <Grid item xs={6} al>
                <span>Cargo Planner</span>
            </Grid>
            <Grid item xs={2}>
                <span>Cargo Planner</span>
            </Grid>
        </Grid>
    )
}

export default Header