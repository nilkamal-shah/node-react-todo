import React, { useState } from "react";
import { Link } from "react-router-dom";
import { saveTodo } from "../../services/api";

import "./Todo.style.css";

const Todo = ({ todo, isDone, id, hasAttachment }) => {
	const [myTodo, setTodo ] = useState({
		todo, isDone, id, hasAttachment
	});
	const handleChange = async () => {
		const data = await saveTodo({
			todo, isDone: !myTodo.isDone,id, hasAttachment, 
		});
		
		setTodo(prev => {
			return {...prev, isDone: data.isDone}
		})
	}
	return (
		<div class="flex items-center mb2">
			<input class="mr2" type="checkbox" id={id} value={id} checked={myTodo.isDone} onChange={handleChange} />
			<label htmlFor={id} class="lh-copy">
				<Link to={`/create/${id}`} className={`title ${myTodo.isDone ? "done" : ""}`}>
					{myTodo.todo}
				</Link>
			</label>
		</div>
	);
};

export default Todo;
