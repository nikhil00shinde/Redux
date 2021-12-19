import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./redux/reducer";

//myStore se hum reducer se state change kar sakte hain
//store ko use karne ke liye hum createStore function ko reducer dena padtha hain
let myStore = createStore(reducer);

ReactDOM.render(
	//Provider hmare redux ko react se connect karne ke liye
	<Provider store={myStore}>
		<App />
	</Provider>,
	document.getElementById("root")
);
