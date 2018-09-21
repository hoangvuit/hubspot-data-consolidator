import { combineReducers } from 'redux';

const contentType = (state = 'page', action) => {
  switch (action.type) {
    case 'CHANGE_TYPE':
    	return action.contentType;
    default:
      return state;
  }
};

const typeSelectorReducer = combineReducers({
	contentType
});

export default typeSelectorReducer;