import React, {useState} from 'react'
import {
    AppBar,
    Container,
    CssBaseline,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    makeStyles
} from "@material-ui/core";
import clsx from 'clsx';
import Shipments from "../web/Shipments";
import Header from "../web/Header";
import {ChevronLeft} from "@material-ui/icons";

const drawerWidth = 240;

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
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    appBarSpacer: theme.mixins.toolbar,
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
    },
    fixedHeight: {
        height: 240,
    },
}));

const initialState = {
    open: false
}

const DesktopLayout = props => {
    const [state, setState] = useState(initialState)

    const classes = useStyles()

    function handleOpenCloseDrawer(){
        setState({
            ...state,
            open: !state.open
        })
    }

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Header open={state.open} handleOpenCloseDrawer={handleOpenCloseDrawer}/>
            <Drawer
                variant="permanent"
                open={state.open}
                classes={{
                    paper: clsx(classes.drawerPaper, !state.open && classes.drawerPaperClose),
                }}
            >
                <div className={classes.toolbarIcon}>
                    <IconButton onClick={handleOpenCloseDrawer}>
                        <ChevronLeft />
                    </IconButton>
                </div>
                <Divider />
                <List>
                    <Shipments />
                </List>
            </Drawer>
            <main className={classes.content}>
                <Container className={classes.container}>
                    { props.children }
                </Container>
            </main>
        </div>
    )
}

export default DesktopLayout