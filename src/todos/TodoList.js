import styled from 'styled-components';
import React, { useEffect } from 'react';
import TodoListItem from './TodoListItem';
import {
	getTodosLoading,
	getCompletdTodos,
	getIncompleteTodos,
} from './selectors';
import NewTodoForm from './NewTodoForm';
import { connect } from 'react-redux';

import {
	loadTodos,
	removeTodoRequest,
	markTodoAsCompletedRequest,
} from './thunks';

const ListWrapper = styled.div`
	max-width: 700px;
	margin: auto;
`;

const TodoList = ({
	completeTodos,
	incompleteTodos,
	onRemovePressed,
	onCompletePressed,
	isLoading,
	startLoadingTodos,
}) => {
	useEffect(() => {
		startLoadingTodos();
	}, []);
	const loadingMessage = <div>Loading todos...</div>;
	const content = (
		<ListWrapper>
			<NewTodoForm />
			<h3>Incomplete:</h3>
			{incompleteTodos.map((todo, index) => (
				<TodoListItem
					todo={todo}
					onRemovePressed={onRemovePressed}
					onCompletePressed={onCompletePressed}
					key={index}
				/>
			))}
			<h3>Completed:</h3>
			{completeTodos.map((todo, index) => (
				<TodoListItem
					todo={todo}
					onRemovePressed={onRemovePressed}
					onCompletePressed={onCompletePressed}
					key={index}
				/>
			))}
		</ListWrapper>
	);
	console.log('loading todo list');
	return isLoading ? loadingMessage : content;
};

const mapStateToProps = state => ({
	isLoading: getTodosLoading(state),
	completeTodos: getCompletdTodos(state),
	incompleteTodos: getIncompleteTodos(state),
});

const mapDispatchToProps = dispatch => ({
	onRemovePressed: id => dispatch(removeTodoRequest(id)),
	onCompletePressed: id => dispatch(markTodoAsCompletedRequest(id)),
	startLoadingTodos: () => dispatch(loadTodos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
