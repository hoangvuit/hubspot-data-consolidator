import { combineReducers } from 'redux';

const searchStr = (state = '', action) => {
  switch (action.type) {
    case 'UPDATE_SEARCH_STR':
    	return action.searchStr;
    default:
      return state;
  }
};

const searchFormReducer = combineReducers({
	searchStr
});

export default searchFormReducer;
