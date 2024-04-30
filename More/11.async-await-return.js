/*Async and Await

Async/await is a modern JavaScript feature that allows you to work with promises more easily. It allows you to write asynchronous code that looks synchronous,
 making it easier to understand and maintain.
*/

async function cooking() {
  console.log("Cooking has started");
  return await new Promise((resolve) =>
    setTimeout(() => {
      resolve("Cooking has done...");
    }, 5000)
  ); // Simulate cooking time of 5 seconds
}

async function washingDishes() {
  console.log("Washing dishes has started");
  return await new Promise((resolve) =>
    setTimeout(() => {
      resolve("washing dishes Done...");
    }, 14000)
  ); // Simulate washing dishes time of 7 seconds
}

async function cleaningFloor() {
  console.log("Cleaning the floor has started");
  return await new Promise((resolve) =>
    setTimeout(() => {
      resolve("Cleaning the floordone..."); 
    }, 8000)
  ); // Simulate cleaning floor time of 5 seconds
}

async function startDay() {
  const startTime = new Date();
  console.log("Start time:", startTime);

  // Execute all tasks concurrently using Promise.all()
  await Promise.all([cooking(), washingDishes(), cleaningFloor()]).then(
    (values) => {
      // Values is an array containing the resolved values from each promise
      console.log("Resolved values:");
      console.log(values[0]); // Value from cooking()
      console.log(values[1]); // Value from washingDishes()
      console.log(values[2]); // Value from cleaningFloor()
    }
  );

  const endTime = new Date();
  console.log("End time:", endTime);

  const totalTimeInSeconds = (endTime - startTime) / 1000;
  console.log("Total time taken:", totalTimeInSeconds, "seconds");
}

startDay();

/*Explanation:
In the example provided, the async keyword is used to declare functions that will
 execute asynchronously. Within these functions,
  the await keyword is used to pause the execution of the function until a promise is resolved.
   This allows you to write code that appears to execute sequentially, 
even though it's actually asynchronous under the hood.
*/
