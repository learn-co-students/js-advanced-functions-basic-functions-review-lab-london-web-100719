// Your code here
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
}

function wrapAdjective(symbol = "*") {
  return function(param = "special") {
    return `You are ${symbol}${param}${symbol}!`;
  };
}

let Calculator = {};

Calculator.add = (num1, num2) => num1 + num2;
Calculator.subtract = (num1, num2) => num1 - num2;
Calculator.multiply = (num1, num2) => num1 * num2;
Calculator.divide = (num1, num2) => num1 / num2;

function actionApplyer(startInt, arr) {
  for (let i = 0; i < arr.length; i++) {
    startInt = arr[i](startInt);
  }

  return startInt;
}
