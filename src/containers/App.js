import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../components/Header/Header';
import News from '../components/News/News';

const App = () => (
	<Router>
		<div className="App">
			<Header />
			<News />
		</div>
	</Router>
);

export default App;
