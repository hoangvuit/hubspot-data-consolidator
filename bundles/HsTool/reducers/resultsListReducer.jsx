import { combineReducers } from 'redux';

const results = (state = [], action) => {
	switch (action.type){
		case 'SET_DATA':
			return action.results;
		default:
			return state;
	}
};

const needFetching = (state = false, action) => {
	switch (action.type) {
		case 'FETCH_ITEMS':
			return true;
		case 'FETCH_ITEMS_SUCCESS':
		case 'FETCH_ITEMS_FAIL':
			return false;
		default:
			return state;
	}
}

const resultsListReducer = combineReducers({
	results, needFetching
});

export default resultsListReducer;