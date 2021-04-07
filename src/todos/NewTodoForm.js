import React, { useState } from 'react';
import { connect } from 'react-redux';
import {addTodoRequest} from './thunks'
import './NewTodoForm.css';


function NewTodoForm({ todos, onCreatePressed }) {
	const [inputValue, setInputValue] = useState('');
	return (
		<div className='new-todo-form'>
			<input
				type='text'
				className='new-todo-input'
				placeholder='Type your new todo'
				value={inputValue}
				onChange={e => setInputValue(e.target.value)}
			/>
			<button
				onClick={() => {
					const isDuplicateText = todos.some(todo => todo.text === inputValue);
					if (!isDuplicateText) {
						onCreatePressed(inputValue);
						setInputValue('');
					}
				}}>
				Create Todo
			</button>
		</div>
	);
}

const mapStateToProps = state => ({
	todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
	onCreatePressed: text => dispatch(addTodoRequest(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
