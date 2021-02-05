import {LOAD_SHIPMENTS, SET_SHIPMENT, UPDATE_SHIPMENT} from './shipments.types'

export const saveShipments = (data = []) => {
    return {
        type: LOAD_SHIPMENTS,
        payload: data
    }
}

export const setShipment = (record = {}) => {
    return {
        type: SET_SHIPMENT,
        payload: record
    }
}

export const updateShipment = (key, value) => {
    console.log(key, value)
    return {
        type: UPDATE_SHIPMENT,
        payload: {
            key,
            value
        }
    }
}