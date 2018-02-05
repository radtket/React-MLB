import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { save, load } from 'redux-localstorage-simple';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import 'normalize.css/normalize.css';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './utils/registerServiceWorker';

import rootReducer from './reducers/reducers';

const middleware = [logger, thunk];

const store = createStore(rootReducer, load(), composeWithDevTools(applyMiddleware(...middleware, save())));
// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));

render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
