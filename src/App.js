import React from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {

	return (
		<div className="container">
			<div className="row">
				<div className="col-10 mx-auto col-md-8 mt-4">
					<h3 className="text-capitalize text-center">
						<TodoInput />
					</h3>
						<TodoList />
				</div>
			</div>
		</div>
	);
};

export default App;
