// Your code here

function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = "go to the office"){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(another = "*"){
    return function(arg = "special"){
        return `You are ${another + arg + another}!`
    }
}

const Calculator = {
    add,
    subtract,
    multiply,
    divide
} 

function add(a,b){
return a + b
}

function subtract(a,b){
return a - b
}

function multiply(a,b){
return a * b
}

function divide(a,b){
return a / b
}

function actionApplyer(startingInt, fnArray){
    let handledInt = startingInt
    fnArray.forEach( (el) => {
        handledInt = el(handledInt)
    })
    
    return handledInt
}
