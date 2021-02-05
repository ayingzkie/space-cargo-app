import React, {useEffect, useState} from 'react'
import {Container, Drawer, List, makeStyles, useMediaQuery} from "@material-ui/core";
import clsx from 'clsx';
import Shipments from "../web/Shipments";
import Header from "../web/Header";


const drawerWidth = 340;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
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
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        height: '100vh',
        overflow: "scroll",
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        paddingTop: '64px'
    },
    drawerPaperClose: {
        height: '100vh',
        overflow: "scroll",
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },

    },
    appBarSpacer: {
        marginTop: '64px'
    },
    appBarSpacerMobile: {
        marginTop: '140px'
    },
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
        backgroundColor: theme.palette.primary
    },
    fixedHeight: {
        height: 240,
    },
}));

const initialState = {
    open: true
}

const DesktopLayout = props => {
    const [state, setState] = useState(initialState)


    const matches = useMediaQuery('(min-width:1280px)');

    const classes = useStyles()

    // this will close the drawer when screen size is less than 1280px
    // for more visibility when screen is small
    useEffect(()=>{
        if(!matches){
            closeDrawer()
        }else {
            openDrawer()
        }
    },[matches])

    function handleOpenCloseDrawer(){
        setState({
            ...state,
            open: !state.open
        })
    }

    function openDrawer() {
        setState({
            ...state,
            open:true
        })
    }


    function closeDrawer() {
        setState({
            ...state,
            open:false
        })
    }


    return (
        <div className={classes.root}>

                <Header open={state.open} handleOpenCloseDrawer={handleOpenCloseDrawer}/>
                <Drawer
                    variant="permanent"
                    open={state.open}
                    classes={{
                        paper: clsx(classes.drawerPaper, !state.open && classes.drawerPaperClose),
                    }}
                >
                    <List style={!state.open || !matches ? {paddingTop :'80px'} : {}}>
                        <Shipments />
                    </List>
                </Drawer>
                <main className={classes.content}>
                    <div className={clsx(classes.appBarSpacer, !matches && classes.appBarSpacerMobile)} />
                    <Container className={classes.container}>
                        { props.children }
                    </Container>
                </main>
        </div>
    )
}

export default DesktopLayout