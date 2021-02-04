import { SAVE_SHIPMENTS } from './shipments.types'

export const saveShipments = (data = []) => {
    return {
        type: SAVE_SHIPMENTS,
        data: data
    }
}