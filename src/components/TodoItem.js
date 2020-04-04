import React, { useContext } from "react";
import { TodoContext } from "../contexts/TodoContextProvider";

const TodoItem = (props) => {
	const { handleEditItem, deleteItem } = useContext(TodoContext);
	const { item } = props;

	return (
		<li className="list-group-item text-capitalize d-flex justify-content-between my-2">
			<h6>{item.title}</h6>
			<div className="todo-icon">
				<span className="mx-2 text-success">
					<i className="fas fa-pen" onClick={() => handleEditItem(item, item.id)} />
				</span>
				<span className="mx-2 text-danger" onClick={() => deleteItem(item.id)}>
					<i className="fas fa-trash" />
				</span>
			</div>
		</li>
	);
};

export default TodoItem;
