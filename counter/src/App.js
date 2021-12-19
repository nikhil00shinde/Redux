import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementCreator } from "./redux/actions";

let App = () => {
	//useSelector -> ek function leta hain jo hamare store se reducer se current state fetch karta hain
	let state = useSelector((state) => state);

	//useDispatch -> ek hook hain jo ek function return karata hain
	let dispatch = useDispatch();
	return (
		<div>
			<button
				onClick={() => {
					//ye ek object leta hain and store ko dispatch karta hain
					//store mei hamare pass reducer ke action object mei ata hain ye incrementCreator ka object

					//aur jo bhi reducer se return hota woh value state mei update hoti hain, aur update hone par store provider ko btata hain ki state update hooyi jis se hamara pura app re-render hota hain
					dispatch(incrementCreator());
				}}
			>
				+
			</button>
			<p>{state}</p>
		</div>
	);
};

export default App;
