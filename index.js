import { symlink } from "fs"

function saturdayFun(activity="roller-skate") {
    return (`This Saturday, I want to ${activity}!`)
}

function mondayWork(activity="go to the office") {
    return (`This Monday, I will ${activity}.`)
}

function wrapAdjective(sign="*") {
    return function(param="special"){
        return `You are ${sign}${param}${sign}!`
    }
}

const Calculator = {
    add: function(x,y) {
        return x + y
    },
    subtract: function(x,y){
        return x - y
    },
    multiply: function(x,y){
        return x * y
    },
    divide: function(x,y){
        return x / y
    }
    
}

const actionApplyer = (startInt, array){
    let a = startInt
}