/* Synchromous Operation*/
async function cooking() {
  console.log("Cooking has started");
  // Simulating cooking time synchronously
  //here my work will be take 4 seconds
  await setTimeout(() => {
    console.log("Cooking has completed");
  }, 4000);
  // As of now i am giving the 4 seconds. I know cooking woud't be possible in 4 seconds 😜
}

async function WashDishes() {
  console.log("WashDishes has started");

  //here my work will be take 10 seconds
  await setTimeout(() => {
    console.log("WashDishes has completed");
  }, 10000);

  // I know WashDishes woud't be possible in 10 seconds 😜
}

async function CleanFloor() {
  console.log("CleanFloor has started");
  // Simulating clean floor time synchronously
  //here my work will be take 10 seconds
  await setTimeout(() => {
    console.log("CleanFloor has completed");
  }, 6000);
  // I know CleanFloor woud't be possible in 6 seconds 😜
}

/* ASynchromous Operation By Async and Await*/

async function LetsStartTheWorkByAsync() {
  const startTime = new Date();
  console.log("Start time in Async Call:", startTime);

 await cooking();
 await WashDishes();
 await CleanFloor();

  const endTime = new Date();
  console.log("End time in Async Call::", endTime);

  const totalTimeInSeconds = (endTime - startTime) / 1000;
  console.log(
    "Total time taken in Async Call::",
    totalTimeInSeconds,
    "seconds"
  );
}

LetsStartTheWorkByAsync();
