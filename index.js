function displayName(studentName, cb) {
  console.log(studentName);
  console.log(cb(3));
}

function displayCallback() {
  return 400 * 200;
}

//displayName('Aniket', displayCallback);

function calculate(number, callBackFun) {
  return callBackFun(number) * number;
}

function multiplyBy2(number) {
  return number * 2;
}

//console.log(calculate(100, multiplyBy2));

function map(array, callback) {
  const output = [];

  for (let ele of array) {
    output.push(callback(ele));
  }
  return output;
}

function addTwo(input) {
  return input * 2;
}

console.log(map([1, 2, 3], addTwo));
