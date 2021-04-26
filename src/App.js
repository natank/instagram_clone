import React from 'react';
import { hot } from 'react-hot-loader';

const App = () => {
	console.log('loading app');
	return <p>Hello</p>;
};

export default hot(module)(App);
