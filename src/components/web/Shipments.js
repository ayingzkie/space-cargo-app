import React, {useEffect} from 'react'
import {ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import { ShoppingCart } from '@material-ui/icons';
import { connect } from 'react-redux'
import {saveShipments} from "../../redux/Shipments/shipments.actions";

const Shipments = props => {

    useEffect(()=>{
        if(props.shipments){
            window.alert('Ooops! No shipments has been loaded. Please load shipments.')
        }
    }, [])

    const shipments = props.shipments.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0) )

    return (
        <div>
            {
                shipments.map((item)=>{
                    return (
                        <ListItem button key={item.id}>
                            <ListItemIcon>
                                <ShoppingCart />
                            </ListItemIcon>
                            <ListItemText primary={item.name} />
                        </ListItem>
                    )
                })
            }
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Shipments)