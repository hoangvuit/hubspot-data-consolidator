import React from 'react';
import TypeSelector from './typeSelectorContainer';
import SearchForm from './searchFormContainer';
import ResultsList from './resultsListContainer';
import ItemDetails from './itemDetailsContainer';

const App = () => (
	<div>
		<SearchForm />
		<TypeSelector />
		<ResultsList />
		<ItemDetails />
	</div>
)

export default App;