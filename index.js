function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`
}

let mondayWork = function (activity = "go to the office") {
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(param = "*") {
  return function (adjective = "special") {
    return `You are ${param}${adjective}${param}!`
  }
}

let Calculator = {
  add: function (a, b) {
    return a + b
  },
  subtract: function (a, b) {
    return a - b
  },
  multiply: function (a, b) {
    return a * b
  },
  divide: function (a, b) {
    return a / b
  }
}

function actionApplyer(start, fns) {
  let a = start

  for (let i = 0; i < fns.length; i++) {
    a = fns[i](a)
  }
  return a
}