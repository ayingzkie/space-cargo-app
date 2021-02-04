import React from "react";
import {makeStyles, Grid, TextField, Button, Typography, AppBar, Toolbar, IconButton, Badge} from "@material-ui/core";
import clsx from 'clsx';
import {Menu, Notifications} from '@material-ui/icons';
import { saveShipments } from "../../redux/Shipments/shipments.actions";
import { connect } from 'react-redux'
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
}));

function Header(props){
    const classes = useStyles()

    function loadShipments(){
        fetch('http://localhost:5000/api/shipments',{
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then((resp)=>{
            console.log(resp,"data")
            return resp.json()
        }).then((json)=>{
           props.saveShipments(json)
        })
    }

    async function saveShipments(){
        console.log(props.shipments,"shipments")
        if(props.shipments.length !== 0){
            const fileName = "shipments";
            const json = JSON.stringify(props.shipments);
            const blob = new Blob([json],{type:'application/json'});
            const href = await URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = href;
            link.download = fileName + ".json";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }else {
            window.alert("No shipments loaded. Please load shipments first.")
        }
    }

    return (
        <AppBar position="absolute" className={clsx(classes.appBar, props.open && classes.appBarShift)}>
            <Toolbar className={classes.toolbar}>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    onClick={props.handleOpenCloseDrawer}
                    className={clsx(classes.menuButton, props.open && classes.menuButtonHidden)}
                >
                    <Menu />
                </IconButton>
                <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                    Cargo Planner
                </Typography>
                <Button onClick={loadShipments}>Load</Button>
                <Button onClick={saveShipments}>Save</Button>
            </Toolbar>
        </AppBar>
    )
}

const mapStateToProps = state => {
    return {
        shipments: state.shipments.lists
    }
}

const mapDispatchToProps = dispatch => {
    return {
        saveShipments: (data)=>dispatch(saveShipments(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)