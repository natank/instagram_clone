import React from 'react';
import './TodoList.css';
const TodoListItem = ({ todo, onRemovePressed, onCompletePressed }) => (
	<div className='todo-item-container'>
		<h3>{todo.text}</h3>
		<div className='buttons-container'>
			{todo.isCompleted ? null : (
				<button onClick={() => onCompletePressed(todo.text)}>
					Mark As Completed
				</button>
			)}
			<button
				className='remove-buttom'
				onClick={() => onRemovePressed(todo.text)}>
				Remove
			</button>
		</div>
	</div>
);

export default TodoListItem;
