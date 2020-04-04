import React, { useContext } from "react";
import { TodoContext } from "../contexts/TodoContextProvider";

const TodoInput = () => {
	const { title, editItem, handleChange, handleSubmit } = useContext(TodoContext);

	return (
		<div className="card card-body my-3">
			<form onSubmit={handleSubmit}>
				<div className="input-group">
					<div className="input-group-prepend">
						<div className="input-group-text bg-primary text-white">
							<i className="fas fa-book" />
						</div>
					</div>
					<input
						text="text"
						className="form-control text-capitalize"
						placeholder="add a todo item "
						value={title}
						onChange={handleChange}
					/>
				</div>
				<button
					type="submit"
					className={editItem ? "btn btn-block btn-success mt-3" : "btn btn-block btn-primary mt-3"}
				>
					{editItem ? "edit item" : "add item"}
				</button>
			</form>
		</div>
	);
};

export default TodoInput;
