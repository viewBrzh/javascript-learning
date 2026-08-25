// callback
function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

greet("Wat", function () {
  console.log("Nice to meet you!");
});


// promise
const promise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("Data received!");
  } else {
    reject("Something went wrong!");
  }
});
// then
promise.then((result) => {
  console.log(result);
});