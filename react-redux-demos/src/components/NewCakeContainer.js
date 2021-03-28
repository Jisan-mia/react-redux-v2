import React, { useState } from "react";
import { connect } from "react-redux";
import { addCake, buyCake } from "../redux/index";
function NewCakeContainer(props) {
	const [number, setNumber] = useState(1);

	return (
		<div>
			<h2>Number of cakes: {props.numOfCakes} </h2>
			<input
				onChange={(e) => setNumber(e.target.value)}
				value={number}
				type="text"
			/>
			<button onClick={() => props.buyCake(number)}>Buy {number} Cake </button>
			<button onClick={() => props.addCake(number)}> Add {number} Cake </button>
		</div>
	);
}

//step 1
const mapStateToProps = (state) => {
	return {
		numOfCakes: state.cake.numOfCakes,
	};
};

//step 2
const mapDispatchToProps = (dispatch) => {
	return {
		buyCake: (number) => dispatch(buyCake(number)),
		addCake: (number) => dispatch(addCake(number)),
	};
};
//step 3
export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
