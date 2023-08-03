function outerFuntion() {
  function innerFunction() {
    console.log('Welcome to inner Function');
  }

  innerFunction();
}

outerFuntion();

function createFunction() {
  function multiplyBy2(num) {
    return num * 2;
  }

  return multiplyBy2;
}

let generatedFunction = createFunction();
let result = generatedFunction(100);
// console.log(result);

/**
 *  Increment counter using closure
 */

function outer() {
  let counter = 0;

  function inner() {
    return counter++;
  }

  return inner;
}

let resutOuter = outer();
// resutOuter();
// resutOuter();
// resutOuter();
// resutOuter();
// resutOuter();

// console.log(resutOuter());
// console.log(resutOuter());
// console.log(resutOuter());
// console.log(resutOuter());
// console.log(resutOuter());
// console.log(resutOuter());
// console.log(resutOuter());
// console.log(resutOuter());

function newOuter() {
  let newCounter = 0;

  function newInner() {
    return newCounter++;
  }
  return newInner;
}

let myNewFn = newOuter();
console.log(myNewFn());
console.log(myNewFn());

let myNewFn1 = newOuter();
console.log(myNewFn1());
console.log(myNewFn1());
console.log(myNewFn());
