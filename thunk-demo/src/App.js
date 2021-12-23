import { useDispatch, useSelector } from "react-redux";
import { fetchUsers,fetchCreator,successCreator,failureCreator } from "./redux/actions";

let App = () => {
	let state = useSelector((state) => state);
	console.log(state);
	let dispatch = useDispatch();
	return (
		<>
			<button
				onClick={() => {
					// dispatch(fetchUsers());
                   
					//ye kaam same hoga but bade application key liye inconvinience hoga esliye hum thunk use karte hain
					dispatch(fetchCreator());

					fetch("https://jsonplaceholder.typicode.com/users")
						.then((res) => {
							return res.json();
						})
						.then((json) => {
							dispatch(successCreator(json));
							//err
						})
						.catch((err) => {
							dispatch(failureCreator(err));
							//err
						});
				}}
			>
				Click me
			</button>
		</>
	);
};

export default App;
