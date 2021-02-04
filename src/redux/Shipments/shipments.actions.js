import { SAVE_SHIPMENTS } from './shipments.types'

export const saveShipments = (data = []) => {
    console.log(data,"datasss")
    return {
        type: SAVE_SHIPMENTS,
        payload: data
    }
}