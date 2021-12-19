//actions are just objects
//btata hain ki state mei kya change karna

//when writing actions in redux we create something called action creater function

//hum actions ke object ko action creater function(incrementCreator) se return karte hain

export const incrementCreator = () => {
	return {
		type: "INCREMENT",
	};
};


