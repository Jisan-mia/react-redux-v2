import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import counterReducer from "./counter/counterReducer";
import iceCreamReducer from "./iceCreaam/iceCreamReducer";

const rootReducer = combineReducers({
	cake: cakeReducer,
	iceCream: iceCreamReducer,
	counter: counterReducer,
});

export default rootReducer;
