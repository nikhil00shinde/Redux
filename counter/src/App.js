import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementCreator, decrementCreator } from "./redux/actions";

let App = () => {
	//useSelector -> ek function leta hain jo hamare store se reducer se current state fetch karta hain
	let state = useSelector((state) => state);

	//useDispatch -> ek hook hain jo ek function return karata hain
	let dispatch = useDispatch();
	return (
		<div>
			<button
				onClick={() => {
					dispatch(incrementCreator(1));
				}}
			>
				+1
			</button>
			<button
				onClick={() => {
					dispatch(incrementCreator(10));
				}}
			>
				+10
			</button>
			<p>{state}</p>
			<button
				onClick={() => {
					dispatch(decrementCreator());
				}}
			>
				-
			</button>
		</div>
	);
};

export default App;
