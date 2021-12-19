//for multiple state make different reducer

export const counterReducer = (state = 0, action) => {
	switch (action.type) {
		case "INCREMENT":
			return state + action.payload; //update state value with this value
		case "DECREMENT":
			return state - 1;
		default:
			return state;
	}
};

export const loginReducer = (state = false, action) => {
	switch (action.type) {
		case "LOGIN":
			return false;

		case "LOGOUT":
			return true;

		default:
			return state;   
	}
};
