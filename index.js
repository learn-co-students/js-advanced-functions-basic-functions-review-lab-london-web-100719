// Your code here
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

let mondayWork = function(activity="go to the office") {
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective (flair="*") {
    return function(thing="special") {
        return `You are ${flair}${thing}${flair}!`;
    }
}

const Calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b
};

const actionApplyer = (num, functionArray) => {
    functionArray.map(func => num = func(num));
    return num;
}