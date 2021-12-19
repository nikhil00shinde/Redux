//Is a function ye actual mei state ko change karta hain

//2 argument leta hai
//first one => intial state hoti hain (default value)
//second one => action ka object ata hain jiske bases pe state ko change krega
let reducer = (state = 0, action) => {
	switch (action.type) {
		case "INCREMENT":
			return state + 1; //update state value with this value

		default:
			return state;
	}
};

export default reducer;
