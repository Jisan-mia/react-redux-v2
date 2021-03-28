import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCake, buyCake } from "../redux/index";

function HooksCakeContainer() {
	const numOfCakes = useSelector((state) => state.cake.numOfCakes);
	const dispatch = useDispatch();
	return (
		<div>
			<h2>(Using Hooks) Num of cakes: {numOfCakes} </h2>
			<button onClick={() => dispatch(buyCake())}>Buy Cake</button>
			<button onClick={() => dispatch(addCake())}>Add Cake to selves</button>
		</div>
	);
}

export default HooksCakeContainer;
