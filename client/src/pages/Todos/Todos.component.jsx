import React, { useState, useEffect } from "react";
import { getTodos } from "../../services/api";
import Todo from "../../components/Todo/Todo.component";
import "./Todos.style.css";

const Todos = () => {
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		const fetchTodos = async () => {
			const data = await getTodos();
			console.log(data);
			setTodos(data);
		};
		fetchTodos();
	}, []);

	return (
		<div className="Todos measure center">
			<article class="pa3 pa5-ns">
				<fieldset id="favorite_movies" class="bn">
					<legend class="fw7 mb2">Todo List</legend>
					{todos.map((todo) => (
						<Todo key={todo.id} id={todo._id} {...todo} />
					))}
				</fieldset>
			</article>
		</div>
	);
};

export default Todos;
