import { combineReducers } from 'redux';


import shipmentsReducer from './Shipments/shipments.reducer';


const rootReducer = combineReducers({

    shipments: shipmentsReducer,

});

export default rootReducer;