import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoContext } from "../contexts/TodoContextProvider";

const TodoList = () => {
	const { todoList, clearTodoList } = useContext(TodoContext);
	console.log(todoList);

	return (
		<ul className="list-group my-5">
			<h3 className="text-capitalize text-center"> todo list</h3>
			{todoList.map((item) => (
				<TodoItem key={item.id} item={item} />
			))}
			<button type="button" className="btn btn-danger btn-block text-capitalize mt-5" onClick={clearTodoList}>
				clear list
			</button>
		</ul>
	);
};

export default TodoList;
