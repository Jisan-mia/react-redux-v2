import React from "react";
import { connect } from "react-redux";
import { addCake, buyCake } from "../redux/index";
function CakeContainer(props) {
	return (
		<div>
			<h2>Number of cakes: {props.numOfCakes} </h2>
			<button onClick={props.buyCake}>Buy Cake </button>
			<button onClick={props.addCake}> Add Cake </button>
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
		buyCake: () => dispatch(buyCake()),
		addCake: () => dispatch(addCake()),
	};
};
//step 3
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
