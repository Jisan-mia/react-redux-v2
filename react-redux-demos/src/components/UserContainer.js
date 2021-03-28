import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../redux";

function UserContainer({ fetchUsers, userData }) {
	useEffect(() => {
		fetchUsers();
	}, []);
	return userData.loading ? (
		"loading..."
	) : userData.error ? (
		<p>{userData.error}</p>
	) : (
		<div>
			{userData &&
				userData.users &&
				userData.users.map((user) => <li>{user.name} </li>)}
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		userData: state.user,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		fetchUsers: () => dispatch(fetchUsers()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
