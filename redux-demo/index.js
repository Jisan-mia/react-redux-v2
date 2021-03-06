// Redux Store
const redux = require("redux");
const reduxLogger = require("redux-logger"); //redux logger
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
//redux logger
const logger = reduxLogger.createLogger();

// actions
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAME = "BUY_ICECREAM";

//action creator
function buyCake() {
	return {
		type: BUY_CAKE,
		info: "First redux action",
	};
}
function buyIceCream() {
	return {
		type: BUY_ICECREAME,
	};
}

//reducers: (prevState, action) => newState
/*
const initailState = {
	numOfCakes: 10,
	numOfIceCreams: 20,
};

const reducer = (state = initialCakeState, action) => {
	switch (action.type) {
		case BUY_CAKE:
			return {
				...state,
				numOfCakes: state.numOfCakes - 1,
			};

		case BUY_ICECREAME:
			return {
				...state,
				numOfIceCreams: state.numOfIceCreams - 1,
			};
		default:
			return state;
	}
};
*/

// cake initial state
const initialCakeState = {
	numOfCakes: 10,
};
// icecream initial state
const initialIceCreamState = {
	numOfIceCreams: 20,
};
//reducer for buy cake
const cakeReducer = (state = initialCakeState, action) => {
	switch (action.type) {
		case BUY_CAKE:
			return {
				...state,
				numOfCakes: state.numOfCakes - 1,
			};
		default:
			return state;
	}
};

//reducer for buy icecream
const iceCreamReducer = (state = initialIceCreamState, action) => {
	switch (action.type) {
		case BUY_ICECREAME:
			return {
				...state,
				numOfIceCreams: state.numOfIceCreams - 1,
			};
		default:
			return state;
	}
};

// combine multiple reducers
const rootReducers = combineReducers({
	cake: cakeReducer,
	iceCream: iceCreamReducer,
});

const store = createStore(rootReducers, applyMiddleware(logger));
console.log("Initial State", store.getState());
const unsubscribe = store.subscribe(() => {});
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());

store.dispatch(buyIceCream());
store.dispatch(buyIceCream());

unsubscribe();
