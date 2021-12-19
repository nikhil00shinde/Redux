//actions are just objects
//btata hain ki state mei kya change karna

//when writing actions in redux we create something called action creater function

//WHY WE MAKE ACTIONCREATOR FUNCTIONS, WHY NOT SAVE OBJECT DIRECTLY?
//====> Because of payload
//user kuch bhi data dena chahta hain

export const incrementCreator = (value) => {
	return {
		type: "INCREMENT",
		payload: value,
	};
};

export const decrementCreator = () => {
	return {
		type: "DECREMENT",
	};
};
