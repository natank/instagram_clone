import React from 'react';
import styled from 'styled-components';
import { hot } from 'react-hot-loader';
import TodoList from './todos/TodoList';

const AppWrapper = styled.div`
	margin: 1rem;
	font-family: Arial, Helvetica, sans-serif;
	color: #222222;
`;

const App = () => {
	console.log('loading app');
	return (
		<AppWrapper>
			<TodoList />
		</AppWrapper>
	);
};

export default hot(module)(App);
