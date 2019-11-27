const saturdayFun = (activity = 'roller-skate') => {

	return `This Saturday, I want to ${activity}!`

};

const mondayWork = (activity = 'go to the office') => {

	return `This Monday, I will ${activity}.`

};

const wrapAdjective = (symbol = "*") => {

	const wrap = (whatToWrap) => {

		return `You are ${symbol}${whatToWrap}${symbol}!`

	}

	return wrap;

};

let Calculator = {

	add: (num1, num2) => {return num1 + num2},
	subtract: (num1, num2) => {return num1 - num2},
	multiply: (num1, num2) => {return num1 * num2},
	divide: (num1, num2) => {return num1 / num2}

};

const actionApplyer = (startingInteger, arrayOfFunctions) => {

	let num = startingInteger
	if (arrayOfFunctions.length == 0) {

		return startingInteger;

	} else {

		arrayOfFunctions.map((func) => num = func(num))

	}

	return num;

}