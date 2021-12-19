import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	incrementCreator,
	decrementCreator,
	loginCreator,
	logoutCreator,
} from "./redux/actions";

let App = () => {
	let { count, logged } = useSelector((state) => {
		return state;
	});

	let dispatch = useDispatch();
	return (
		<>
			<button
				onClick={() => {
					dispatch(loginCreator());
				}}
			>
				login
			</button>
			<button
				onClick={() => {
					dispatch(logoutCreator());
				}}
			>
				logout
			</button>
			<br></br>

			{logged ? (
				<>
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
					<p>{count}</p>
					<button
						onClick={() => {
							dispatch(decrementCreator());
						}}
					>
						-
					</button>
				</>
			) : (
				""
			)}
		</>
	);
};

export default App;
