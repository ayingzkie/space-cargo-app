import React, {useEffect} from 'react'
import {useParams} from "react-router-dom";
import {setShipment, updateShipment} from "../../redux/Shipments/shipments.actions";
import {connect} from 'react-redux'
import {Box, Link, Typography} from "@material-ui/core";
import CustomInput from "../commons/CustomInput";


const Cargos = props => {
    const params = useParams()

    useEffect(()=>{
        const fetchShipments = () => {
            fetch('http://localhost:5000/api/shipments/' + params.id).then((resp)=>{
                return resp.json()
            }).then((json)=>{
                props.setShipment(json)
            })
        }

        fetchShipments();

    }, [params])

    function calculateCargoBays(units){
        if(units){
            let cargos = units.split(',').map(Number)

            return Math.round(cargos.reduce((a, b) => a + b, 0) / 10)
        }

    }

    async function onChangeCargo(value){
        props.updateShipment('boxes', value.target.value)
    }


    return (
        <>
            {
                params?.id && <Box>

                    <Typography
                        variant="h4"
                        component="h4"
                    >
                        { props.shipment.name }
                    </Typography>

                    <Link href={`mailto:${props.shipment.email}`} color="inherit">
                        { props.shipment.email }
                    </Link>


                    <div style={{
                        margin: '15px 0 15px 0'
                    }}>
                        <span>Number of required cargo bays
                            <b> {' '}
                                {calculateCargoBays(props.shipment.boxes)}
                            </b>
                        </span>
                    </div>

                    <div>
                        <CustomInput
                            label={'Cargo Boxes'}
                            style={{
                                marginTop: '15px',
                                width: '500px'
                            }}
                            variant="outlined"
                            id="custom-css-outlined-input"
                            onChange={onChangeCargo}
                            value={ props.shipment.boxes || ''}
                            InputLabelProps={{shrink: props.shipment.boxes !== null }}
                        />
                        {/*<TextField value={props.shipment.boxes} onChange={onChangeCargo}/>*/}
                    </div>
                </Box>
            }
        </>


    )
}

const mapStateToProps = state => {
    return {
        shipment: state.shipments.record
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setShipment: (data)=>dispatch(setShipment(data)),
        updateShipment: (key, value)=>dispatch(updateShipment(key,value)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cargos)