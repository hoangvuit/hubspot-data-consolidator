import ReactOnRails from 'react-on-rails';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import hsToolReducer from './reducers';
import SearchForm from './components/SearchForm';
import TypeSelector from './components/TypeSelector';
import App from './containers/index';

// const configureStore = (railsProps) => (
//   createStore(hsToolReducer, railsProps)
// );

const store = createStore(
	hsToolReducer, /* preloadedState, */
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const HSTool = (props, _railsContext) => (
	<Provider store={store}>
		<App />
  </Provider>
);

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  HSTool,
});
