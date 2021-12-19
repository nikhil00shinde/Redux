import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import { counterReducer, loginReducer } from "./redux/reducer";

//combine multiple reducer to form one called => rootReducer

let rootReducer = combineReducers({
	count: counterReducer,
	logged: loginReducer,
});
//count, logged are name of state

//create store take single reducer
let myStore = createStore(rootReducer);

ReactDOM.render(
	<Provider store={myStore}>
		<App />
	</Provider>,
	document.getElementById("root")
);
