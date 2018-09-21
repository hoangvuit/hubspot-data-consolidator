import { combineReducers } from 'redux';
import typeSelector from './typeSelectorReducer';
import searchForm from './searchFormReducer';
import resultsList from './resultsListReducer';
import resultItem from './resultItemReducer';

const hsToolReducer = combineReducers({
	typeSelector,
	searchForm,
	resultsList,
	resultItem
});

export default hsToolReducer;
