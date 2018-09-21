import { combineReducers } from 'redux';

const data = (state = {}, action) => {
	switch (action.type) {
		case 'SET_ITEM_DATA':
			return action.data;
		default:
			return state;
	}
};

export default combineReducers({
	data,
});