function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}

let wrapAdjective = function(myParam="*") {
    return function(adjective="special") {
      return `You are ${myParam}${adjective}${myParam}!`
    }
  }

let Calculator = {
    add: function(a,b) {
        return a + b;
    },
    subtract: function(a,b) {
        return a - b
    },
    multiply: function(a,b) {
        return a * b
    },
    divide: function(a,b) {
        return a / b;
    }
}

let actionApplyer = function(startInt, funcArr) {
    let start = startInt

    for (let i = 0; i < funcArr.length; i++) {
        start = funcArr[i](start)
    } 
    return start
}