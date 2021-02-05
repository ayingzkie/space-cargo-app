import React, {useEffect} from 'react'
import {ListItem, ListItemIcon, ListItemText, Typography} from "@material-ui/core";
import {connect} from 'react-redux'
import {saveShipments} from "../../redux/Shipments/shipments.actions";
import {useHistory} from "react-router";

const Shipments = props => {

    const history = useHistory()

    useEffect( ()=>{
       const checkShipments = async () => {
           if(props.shipments){
               window.alert('Ooops! No shipments has been loaded. Please load shipments.')
               await history.push("/")

           }
       }

       checkShipments();

    }, [])


    const onItemClick = id => {
        history.push(`/${id}`)
    }

    return (
        <div>
            {
                props.shipments.map((item, i)=>{
                    return (
                            <ListItem button key={item.id} onClick={()=>onItemClick(item.id)}>
                                <ListItemIcon>
                                    <Typography component={'h4'} variant={'h4'}>
                                        {
                                            i+1
                                        }
                                    </Typography>
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
        saveShipments: (data)=>dispatch(saveShipments(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Shipments)