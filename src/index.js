import React from 'react';
import { render } from 'react-dom';
// import 'normalize.css/normalize.css';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './utils/registerServiceWorker';

render(<App />, document.getElementById('root'));
registerServiceWorker();
