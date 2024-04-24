/*  ==================================Async and await calls 

  What is API ?


*/

/*
   Q) What is call back function
   A : If you write the function which is another function called the callback function
*/

// function step1(callback) {
//   setTimeout(function () {
//     console.log("Step 1 complete");
//     var output =  callback();
//     console.log(output);
//   }, 1000);
// }

// function getCustomerID(){
//    return "Cus12345"
// }

// step1(getCustomerID);

function step1(callback) {
  setTimeout(function () {
    console.log("Step 1 complete");
    callback();
  }, 2000);
}

function step2(callback) {
  setTimeout(function () {
    console.log("Step 2 complete");
    callback();
  }, 2000);
}

function step3() {
  setTimeout(function () {
    console.log("Step 3 complete");
  }, 2000);
}

//step1(step2)
step1(function () {
  step2(function () {
    step3();
  });
});

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => {
//     return "Madan";
//   })
//   .then((json) => console.log(json));

// fetch("https://jsonplaceholder.typicode.com/albums")
//   .then((response) => {
//     return "Madan";
//   })
//   .then((json) => console.log(json));

// fetch("https://jsonplaceholder.typicode.com/comments")
//   .then((response) => {
//     return "Madan";
//   })
//   .then((json) => console.log(json));
