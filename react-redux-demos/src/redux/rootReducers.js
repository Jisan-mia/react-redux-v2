import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import counterReducer from "./counter/counterReducer";
import iceCreamReducer from "./iceCreaam/iceCreamReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
	cake: cakeReducer,
	iceCream: iceCreamReducer,
	counter: counterReducer,
	user: userReducer,
});

export default rootReducer;
