import React from "react";
import { connect } from "react-redux";
import { decrement, increment } from "../redux";

function Counter(props) {
	const counterStyle = {
		backgroundColor: "#efefef",
		height: "200px",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	};
	const btnStyle = {
		border: "none",
		padding: "10px 30px",
		backgroundColor: "royalBlue",
		color: "white",
		fontSize: "1.2rem",
		cursor: "pointer",
		margin: "0 20px",
	};
	const counter = {
		fontSize: "2rem",
		border: "none",
		outline: "none",
		backgroundColor: "lightGray",
	};
	return (
		<div>
			<h1 style={counterStyle}>
				<button style={btnStyle} onClick={props.decrement}>
					Decrement
				</button>
				<button style={counter}>{props.count}</button>
				<button style={btnStyle} onClick={props.increment}>
					Icrement
				</button>
			</h1>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		count: state.counter.count,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		increment: () => dispatch(increment()),
		decrement: () => dispatch(decrement()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
