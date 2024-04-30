/*
  Q)What is Synchronous Call?
  A)In programming, synchronous call refers to a type of function invocation where the execution happens sequentially, one after the other.
   In other words, each operation or task must wait for the previous one to finish before starting.
*/

function cooking() {
    console.log("Cooking has started");
    setTimeout(() => {
      // Code for cooking...
      console.log("Cooking has completed");
      washDishes();
    }, 5000); // Cooking takes 5 seconds
  }
  
  function washDishes() {
    console.log("Washing dishes has started");
    setTimeout(() => {
      // Code for washing dishes...
      console.log("Washing dishes has completed");
      cleanFloor();
    }, 7000); // Washing dishes takes 7 seconds
  }
  
  function cleanFloor() {
    console.log("Cleaning the floor has started");
    setTimeout(() => {
      // Code for cleaning the floor...
      console.log("Cleaning the floor has completed");
      console.log("All tasks have completed");
    }, 5000); // Cleaning the floor takes 5 seconds
  }
  
  function synchronousTasks() {
    cooking();
  }
  
  synchronousTasks();


//   n this structure, each task is encapsulated within its own function (cooking, washDishes, and cleanFloor). Each function triggers the next task upon
// completion using setTimeout with appropriate delays. Finally,
//    the synchronousTasks function is responsible for starting the sequence by calling cooking.
  