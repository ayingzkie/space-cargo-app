import { LOAD_SHIPMENTS, SET_SHIPMENT, UPDATE_SHIPMENT, SET_FILTER } from './shipments.types';

const INITIAL_STATE = {
	lists: [],
	record: {},
	filter: ''
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

		case SET_FILTER: {
			return {
				...state,
				filter: action.payload
			}
		}

		default:
			return state;
	}
};

export default reducer;
