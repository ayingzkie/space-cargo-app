import { LOAD_SHIPMENTS, SET_SHIPMENT, UPDATE_SHIPMENT } from './shipments.types';

const INITIAL_STATE = {
	lists: [],
	record: {},
};

const reducer = (state = INITIAL_STATE, action) => {
	switch (action?.type) {
		case LOAD_SHIPMENTS: {
			return {
				...state,
				lists: action?.payload,
			};
		}

		case SET_SHIPMENT: {
			return {
				...state,
				record: action?.payload,
			};
		}

		case UPDATE_SHIPMENT: {
			return {
				...state,
				record: {
					...state.record,
					[action.payload.key]: action.payload.value,
				},
			};
		}

		default:
			return state;
	}
};

export default reducer;
