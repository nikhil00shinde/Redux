let initialState = {
	loading: null,
	data: [],
	err: null,
};

//hmare object mei unique key hoti agar hum nhi key add karte for same key then woh override ho jati hain

let reducer = (state = initialState, action) => {
	switch (action.type) {
		case "FETCH_USERS":
			return { ...state, loading: true };

		case "SUCCESS_USERS":
			return { ...state, data: action.payload, loading: false };

		case "FAILURE_USERS":
			return { ...state, err: action.payload, loading: false };

		default:
			return state;
	}
};

export default reducer;
