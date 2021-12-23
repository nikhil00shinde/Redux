import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { applyMiddleware, createStore } from "redux";
import reducer from "./redux/reducers";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

let myStore = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
	<Provider store={myStore}>
		<App />
	</Provider>,
	document.getElementById("root")
);
