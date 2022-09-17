import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Todos from "./pages/Todos/Todos.component";

import "./App.css";
import CreateTodo from "./pages/CreateTodo/CreateTodo.component";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<nav class="dt w-100 border-box pa3 ph5-ns">
					<Link class="dtc v-mid mid-gray link dim w-25" to="/" title="Home">
						<img
							src="http://tachyons.io/img/logo.jpg"
							class="dib w2 h2 br-100"
							alt="Todos"
						/>
					</Link>
					<div class="dtc v-mid w-75 tr">
    					<Link class="link dim dark-gray f6 f5-ns dib" to="/create" title="Create New Todo">Create New Todo</Link>
					</div>
				</nav>
				<Routes>
					
					<Route path="/create/:id" element={<CreateTodo />} />
					<Route path="/create" element={<CreateTodo />} />
					<Route path="/" element={<Todos />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
