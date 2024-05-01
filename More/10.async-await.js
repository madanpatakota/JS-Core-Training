/*Async and Await

Async/await is a modern JavaScript feature that allows you to work with promises more easily. It allows you to write asynchronous code that looks synchronous,
 making it easier to understand and maintain.

 Example : Take BankManager doing all activites 

           he want to monitor every person task(funciton) . So his plan is who is taking how much time. 
           Because he wants to assign the new work if any employee completed under him


           Help-Desk            --Report for his performance what he did
           Cashier              --Report for his performance what he did
           Loan Representive    --Report for his performance what he did


           In promise methodology --> First Help-desk , and then next is Casher and then Loan Representive
           For Promises (Clean Work like . Manager can understand that) . End of the day he can get the result like
            
           Async and Await methodology ---> Manager can check all reports which are in his desk  .. parllel


*/

// function waitingStateA() {
//   var status = "Freind A Pending";
//   for (var i = 0; i < 1000000000000; i++) {
//     status = "Freind A Came";
//   }
//   return status;
// }

// function waitingStateB() {
//   var status = "Freind C Pending";
//   for (var i = 0; i < 100; i++) {
//     status = "Freind B Came";
//   }
//   return status;
// }

// async function freindA() {
//   var status = await waitingStateA();
//   console.log(status);
// }

// async function freindB() {
//   var status = await waitingStateB();
//   console.log(status);
// }

// function freindC() {
//   var status = "frind C Came";
//   console.log(status);
// }

// function callTeaCenter() {
//   freindA();
//   freindB();
//   freindC();  
// }

// callTeaCenter();

async function cooking() {
  console.log("Cooking has started");
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, 5000)
  ); // Simulate cooking time of 5 seconds
  console.log("Cooking has done");
}

async function washingDishes() {
  console.log("Washing dishes has started");
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, 14000)
  ); // Simulate washing dishes time of 7 seconds
  console.log("Washing dishes has done");
}

async function cleaningFloor() {
  console.log("Cleaning the floor has started");
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, 8000)
  ); // Simulate cleaning floor time of 5 seconds
  console.log("Cleaning the floor has done");
}

async function startDay() {
  const startTime = new Date();
  console.log("Start time:", startTime);

  // Execute all tasks concurrently parllel using Promise.all()
  await Promise.all([cooking(), washingDishes(), cleaningFloor()]);

  const endTime = new Date();
  console.log("End time:", endTime);

  const totalTimeInSeconds = (endTime - startTime) / 1000;
  console.log("Total time taken:", totalTimeInSeconds, "seconds");
}

//startDay();

/*Explanation:
In the example provided, the async keyword is used to declare functions that will
 execute asynchronously. Within these functions,
  the await keyword is used to pause the execution of the function until a promise is resolved.
   This allows you to write code that appears to execute sequentially, 
even though it's actually asynchronous under the hood.
*/
