export const fetchCreator = () => {
	return {
		type: "FETCH_USERS",
	};
};

export const successCreator = (users) => {
	return {
		type: "SUCCESS_USERS",
		payload: users,
	};
};

export const failureCreator = (err) => {
	return {
		type: "FAILURE_USERS",
		payload: err,
	};
};

//ye function middleware mei kaam karne ke liye for async work, essey hamara inconvinience kum hota hain and code duplication kum hota,
//ye function fir store ko action dispatch karega ki kya state mei change karna hain
export const fetchUsers = () => {
	return (dispatch) => {
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
	};
};
