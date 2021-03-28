//redux requere or import
const redux = require("redux");
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;

const thunkMiddleWare = require("redux-thunk").default;

const axios = require("axios");

//initial state for api calling data
const initialState = {
	loading: true,
	users: [],
	error: "",
};

//actions
const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

//action creators
const fetchUsersRequest = () => {
	return {
		type: FETCH_USERS_REQUEST,
	};
};

const fetchUsersSuccess = (users) => {
	return {
		type: FETCH_USERS_SUCCESS,
		payload: users,
	};
};

const fetchUsersFailure = (error) => {
	return {
		type: FETCH_USERS_FAILURE,
		payload: error,
	};
};

// reducers
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_USERS_REQUEST:
			return {
				...state,
				loading: true,
			};
		case FETCH_USERS_SUCCESS:
			return {
				loading: false,
				users: action.payload,
				error: "",
			};
		case FETCH_USERS_FAILURE:
			return {
				loading: false,
				users: [],
				error: action.payload,
			};
		default:
			return state;
	}
};

//define async action creator
const fetchUsers = () => {
	return function (dispatch) {
		dispatch(fetchUsersRequest());
		axios
			.get("https://jsonplaceholder.typicode.com/users")
			.then((res) => {
				// res.data is the array of users
				const users = res.data.map((user) => user.id);
				dispatch(fetchUsersSuccess(users));
			})
			.catch((error) => {
				//error.message give the description of the error

				dispatch(fetchUsersFailure(error.message));
			});
	};
};

// store
const store = createStore(reducer, applyMiddleware(thunkMiddleWare));
store.subscribe(() => {
	console.log(store.getState());
});

store.dispatch(fetchUsers());
