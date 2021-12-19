import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementCreator, decrementCreator } from "./redux/actions";

let App = () => {
	let state = useSelector((state) => {
		console.log(state); //it will print all the state inside store
		return state;
	});

	let dispatch = useDispatch();
	return (
		<div>
			{/* <button
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
			</button> */}
		</div>
	);
};

export default App;
