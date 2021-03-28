import React from "react";
import { connect } from "react-redux";
import { addIceCream, buyIceCream } from "../redux/index";

function IceCreamContainer(props) {
	return (
		<div>
			<h2>Num of IceCreams: {props.numOfIceCreams} </h2>
			<button onClick={props.buyIceCream}>Buy IceCream</button>
			<button onClick={props.addIceCream}> Add iceCream to Fezzer</button>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		numOfIceCreams: state.iceCream.numOfIceCreams,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		buyIceCream: () => dispatch(buyIceCream()),
		addIceCream: () => dispatch(addIceCream()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
