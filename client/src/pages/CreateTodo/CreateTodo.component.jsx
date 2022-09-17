import React, { useState, useEffect } from "react";
import { deleteTodo, getTodo, saveTodo } from "../../services/api";
import { useNavigate, useParams } from 'react-router-dom';

const CreateTodo = () => {
	const params = useParams();
	const navigate = useNavigate();


	const [todo, setTodo] = useState({todo: '', isDone: 'false', hasAttachment: 'false'});
	
	useEffect(() => {
		const get = async() => {
			const data = await getTodo(params.id);
			setTodo({todo: data.todo, isDone: data.isDone, hasAttachment: data.hasAttachment, id: data._id});
		}

		if(params.id) get();
	}, [])
	
	const handleChange = (e) => {
		setTodo({ ...todo, [e.target.name]: e.target.value });
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
        const data = await saveTodo(todo);
		if(todo.id) {
			if(data) {
				setTodo({todo: '', isDone: 'false', hasAttachment: 'false'})
				navigate('/')
			}
		} else {
			if(data === 200) {
				setTodo({todo: '', isDone: 'false', hasAttachment: 'false'})
				alert("Todo saved successfully!");
				navigate('/')
			}
		}
		
	};

	const handleDelete = async () => {
		const status = await deleteTodo(params.id);
		if(status === 200) {
			alert("Selected todo deleted successfully!");
			navigate("/");
		}
	}
	return (
		<form className="measure center" onSubmit={handleSubmit}>
			<fieldset id="sign_up" className="ba b--transparent ph0 mh0">
				<legend className="f4 fw6 ph0 mh0">Save New Todo</legend>
			</fieldset>
			<div className="mt3">
				<label className="db fw6 lh-copy f6" for="email-address">
					Todo
				</label>
				<input
					className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
					type="text"
					name="todo"
					id="todo"
					value={todo.todo}
					onChange={handleChange}
				/>
			</div>
			<div className="mt3">
				<label className="db fw6 lh-copy f6" for="isDone">
					Is Done?
				</label>
				<select
					value={todo.isDone}
					onChange={handleChange}
					id="isDone"
					name="isDone"
					className="pa2 select ba bg-transparent hover-bg-black hover-white w-100"
				>
					<option value="true">Yes</option>
					<option value="false">No</option>
				</select>
			</div>
			<div className="mt3">
				<label className="db fw6 lh-copy f6" for="hasAttachment">
					Has Attachment?
				</label>
				<select
					name="hasAttachment"
					value={todo.hasAttachment}
					onChange={handleChange}
					id="hasAttachment"
					className="pa2 select ba bg-transparent hover-bg-black hover-white w-100"
				>
					<option value="true">Yes</option>
					<option value="false">No</option>
				</select>
			</div>
			<div className="mt3">
				<button type="submit" className="f6 link dim br3 ph3 pv2 mb2 dib white bg-black">
					Save
				</button>
				<button type="button" onClick={handleDelete} className="f6 link dim br3 ph3 pv2 mb2 dib white bg-black">
					Delete
				</button>
			</div>
		</form>
	);
};

export default CreateTodo;
