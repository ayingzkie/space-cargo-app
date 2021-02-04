import React, {useEffect, useState} from 'react'

import { connect } from 'react-redux'

import { saveShipments } from '../../redux/Shipments/shipments.actions'
import {Container, Fade, Grid, makeStyles, Modal, useMediaQuery} from "@material-ui/core";

import Header from './Header'
import HeaderMobile from "../mobile/HeaderMobile";

const initialState = {
    modal: false,
    message: ""
}

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

function ShipmentsContainer(props) {
    const classes = useStyles();
    const [state, setState] = useState(initialState)
    const isMobile = useMediaQuery('(min-width:1394px)')

    useEffect(()=>{

        if(props.shipments){
            openModal("No shipments found. Please load shipments")
        }


    }, [])


    function openModal(message){
        setState({
            ...state,
            modal: true,
            message
        })
    }

    function closeModal(){
        setState({
            ...state,
            modal: false
        })
    }

    return (
        <React.Fragment>
            {
                !isMobile ? <HeaderMobile/> : <Header />
            }
        </React.Fragment>
    )
}

const mapStateToProps = state => {

    return {
        shipments: state.shipments.lists
    }
}

const mapDispatchToProps = dispatch => {
    return {
        saveShipments: dispatch(saveShipments())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShipmentsContainer)

