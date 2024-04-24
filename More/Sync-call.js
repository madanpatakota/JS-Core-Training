
/* Synchromous Operation*/
async function cooking(){
    console.log("Cooking has started");
    // Simulating cooking time synchronously
    //here its looping until i = 4000000000 . so it will take some time
    //once i = 4000000001 . so it will leave
    for (let i = 0; i < 4000000000; i++) {
        // Simulate some computation
    }
    console.log("Cooking has completed");   
    // As of now i am giving the 4 seconds. I know cooking woud't be possible in 4 seconds 😜
}


function WashDishes(){
    console.log("WashDishes has started")
    //here its looping until i = 10000000000 . so it will take some time.
    //once i = 10000000000 . so it will leave for loop
    for (let i = 0; i < 10000000000; i++) {
        // Simulate some computation
        
    }
    console.log("WashDishes has completed");
    // I know WashDishes woud't be possible in 10 seconds 😜
}

function CleanFloor(){
    console.log("CleanFloor has started");
    // Simulating clean floor time synchronously
    for (let i = 0; i < 6000000000; i++) {
        // Simulate some computation
    } 
    console.log("CleanFloor has completed"); 
    // I know CleanFloor woud't be possible in 6 seconds 😜
}


//The way you are dealing with Synchronous Call
function LetsStartTheWork() {
    const startTime = new Date();
    console.log("Start time:", startTime);

    cooking();
    WashDishes();
    CleanFloor();

    const endTime = new Date();
    console.log("End time:", endTime);

    const totalTimeInSeconds = (endTime - startTime) / 1000;
    console.log("Total time taken:", totalTimeInSeconds, "seconds");
}

//LetsStartTheWork();



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
    console.log("Total time taken in Async Call::", totalTimeInSeconds, "seconds");
}

LetsStartTheWorkByAsync();