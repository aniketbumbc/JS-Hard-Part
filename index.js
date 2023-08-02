function displayName(studentName, cb) {
  console.log(studentName);
  console.log(cb(3));
}

function displayCallback() {
  return 400 * 200;
}

displayName('Aniket', displayCallback);

function calculate(number, callBackFun) {
  return callBackFun(number) * number;
}

function multiplyBy2(number) {
  return number * 2;
}

console.log(calculate(100, multiplyBy2));
