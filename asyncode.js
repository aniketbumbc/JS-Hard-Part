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

callBackHellCode();
