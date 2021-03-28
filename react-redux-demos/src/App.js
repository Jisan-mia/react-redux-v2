import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import CakeContainer from "./components/CakeContainer";
import Counter from "./components/Counter";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import ItemContainer from "./components/ItemContainer";
import NewCakeContainer from "./components/NewCakeContainer";
import UserContainer from "./components/UserContainer";
import store from "./redux/store";

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<h1>This is react redux demo</h1>
				<UserContainer />
				<hr />
				<ItemContainer cake />
				<hr />
				<ItemContainer />
				<hr />
				<NewCakeContainer />
				<hr />
				<Counter />
				<hr />
				<CakeContainer />
				<hr />
				<HooksCakeContainer />
				<hr />
				<IceCreamContainer />
			</div>
		</Provider>
	);
}

export default App;
