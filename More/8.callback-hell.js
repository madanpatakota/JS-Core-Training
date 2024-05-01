/* Callback functions hell

  In a callback-based approach, we would organize our tasks into separate functions,
  and each function would accept a callback function as a parameter.
  This callback function would be invoked once the task is completed,
  signaling that the next task can begin

*/

/*General discussion about how we have to call a funciton within funciton*/

// callbackfn = function () {            =     function Add(value1 , value2){  
//   Add(10, 20);                                            ////
// }                                                }

function Perfrom(value1 , value2 ,callbackfn) {
  console.log("Perform task has executed...calling the callback function");
  callbackfn();
}

// var testCallBackfn = function(){
// your code .......
// }

function Add(value1, value2) {
  console.log("Test b executed", value1, value2);
}

function CallingTest() {
  Perfrom(10 , 20 , function () {
    Add(10, 20);
  });
}

CallingTest();

//==================================================================================


function cooking(callback) {
  console.log("Cooking has started");
  setTimeout(() => {
    console.log("Cooking has completed");
    callback(); // Invoke the callback function to signal completion
  }, 5000); // Simulate cooking time of 5 seconds
}

function washingDishes(callback) {
  console.log("Washing dishes has started");
  setTimeout(() => {
    console.log("Washing dishes has completed");
    callback(); // Invoke the callback function to signal completion
  }, 7000); // Simulate washing dishes time of 7 seconds
}

function cleaningFloor(callback) {
  console.log("Cleaning the floor has started");
  setTimeout(() => {
    console.log("Cleaning the floor has completed");
    callback(); // Invoke the callback function to signal completion
  }, 5000); // Simulate cleaning the floor time of 5 seconds
}


// ***************************Execute tasks sequentially using callbacks********************
// cooking(() => {
//   washingDishes(() => {
//     cleaningFloor(() => {
//       console.log("All tasks completed!");
//     });
//   });
// });
