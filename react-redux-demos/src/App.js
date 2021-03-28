import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import CakeContainer from "./components/CakeContainer";
import Counter from "./components/Counter";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import store from "./redux/store";

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<h1>This is react redux demo</h1>
				<Counter />
				<CakeContainer />
				<HooksCakeContainer />
				<IceCreamContainer />
			</div>
		</Provider>
	);
}

export default App;
