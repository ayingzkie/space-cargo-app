import React, {useEffect, useState} from 'react'

import { connect } from 'react-redux'

import { saveShipments } from '../redux/Shipments/shipments.actions'
import {Container, Fade, makeStyles, Modal} from "@material-ui/core";

import Header from './commons/Header'

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
        <>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={state.modal}
                onClose={closeModal}
                closeAfterTransition
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={state.modal}>
                    <div className={classes.paper}>
                        <h2 id="transition-modal-title">Message</h2>
                        <p id="transition-modal-description">
                            {
                                state.message
                            }
                        </p>
                    </div>
                </Fade>
            </Modal>
            <Header />
        </>
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

