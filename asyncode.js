console.log('Before Hello');

function asyncHello() {
  console.log('Welcome Hello');
}

function blockScope() {
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
}

// setTimeout(asyncHello, 2000);

// blockScope();

// console.log('After Hello');

function callBackHellCode() {
  setTimeout(function () {
    console.log('hell-1');

    setTimeout(function () {
      console.log('hell-2');

      setTimeout(function () {
        console.log('hell-3');

        setTimeout(function () {
          console.log('hell-4');
        }, 0);
      }, 2000);
    }, 1000);
  }, 1000);
}

// callBackHellCode();

function delayCounter(target, wait) {}

// UNCOMMENT THESE TO TEST YOUR WORK!
// const countLogger = delayCounter(3, 1000)
// countLogger();
// After 1 second, log 1
// After 2 seconds, log 2
// After 3 seconds, log 3

/* CHALLENGE 8 */

function delayCounter(target, wait) {
  function inner() {
    for (let i = 1; i <= target; i++) {
      setTimeout(() => {
        console.log(`After ${i} second`);
      }, wait * i);
    }
  }

  return inner;
}

const countLogger = delayCounter(3, 5000);

countLogger();
