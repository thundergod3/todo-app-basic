import React, { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const setLocalStorageTodoList = localStorage.getItem("todolist") ? JSON.parse(localStorage.getItem("todolist")) : [];

const TodoContext = createContext();

const TodoContextProvider = (props) => {
	const [todoList, setTodoList] = useState(setLocalStorageTodoList);
	const [id, setId] = useState("");
	const [title, setTitle] = useState("");
	const [editItem, setEditItem] = useState(false);

	const handleChange = (e) => {
		setTitle(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (title == "") {
			alert("Item must have title");
		} else {
			if (editItem) {
				let tempTodoList = todoList.map((item) => (item.id === id ? { ...item, title } : item));
				setTodoList(tempTodoList);
				setEditItem(false);
			} else {
				const idItem = uuidv4();
				setTodoList([...todoList, { title, id: idItem }]);
			}
			setTitle("");
		}
	};

	const handleEditItem = (item, id) => {
		setTitle(item.title);
		setEditItem(true);
		setId(id);
	};

	const clearTodoList = () => {
		setTodoList([]);
	};

	const deleteItem = (id) => {
		setTodoList(todoList.filter((item) => item.id !== id));
	};

	useEffect(() => {
		localStorage.setItem("todolist", JSON.stringify(todoList));
	}, [todoList]);

	return (
		<TodoContext.Provider
			value={{
				todoList,
				id,
				title,
				editItem,
				handleChange,
				handleSubmit,
				handleEditItem,
				clearTodoList,
				deleteItem,
			}}
		>
			{props.children}
		</TodoContext.Provider>
	);
};

export { TodoContextProvider, TodoContext };
