/*
Promise :
A promise is an object that represents 
the eventual completion or failure of an asynchronous operation and its resulting value. 
It allows you to handle asynchronous operations more easily and cleanly, avoiding callback hell.

asynchronous operations means which shouldnot stop the current block...

Syntax : new Promise will accept the function as parameter . and this function we will having the 2 parameters i.e. for succss and failure
        const myPromise = new Promise((resolve, reject) => {
        // Asynchronous operation or logic
        // If the operation is successful, call resolve()
        // If there's an error, call reject()
        });



The way of using : 
        const myPromise = new Promise((resolve, reject) => {
        // Asynchronous operation or logic
        if (operationSucceeds) {
            resolve(result);
        } else {
            reject(error);
        }
        });

        myPromise.then((result) => {
        // Handle the resolved value
        }).catch((error) => {
        // Handle any errors that occurred
        });


Use : Clean Code structure by 'then'
      Handle the exceptions
*/

function getEmpAboutreturntotheHome() {
  return new Promise((replySuccess, rejectFailure) => {
    var empWaitingForBossApproval = "OK";
    setTimeout(()=>{
      if(empWaitingForBossApproval != "OK"){
        replySuccess("I am coming to the home");
      }
      else{
        rejectFailure("Some thing wrong i am not coming to the home....");
      }
    },5000);
  });
}

// getEmpAboutreturntotheHome()
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error);
//     console.error(error);
//   });



function cooking() {
  return new Promise((resolve, reject) => {
    console.log("Cooking has started");
    setTimeout(() => {
      console.log("Cooking has completed");
      resolve(); // in future if you want to pass the data in resolve you can pass here. like resolve("Hello world")
    }, 5000); // Simulating cooking time of 5 seconds
  });
}

function washDishes() {
  return new Promise((resolve, reject) => {
    console.log("Washing dishes has started");
    setTimeout(() => {
      console.log("Washing dishes has completed");
      resolve();
    }, 7000); // Simulating washing dishes time of 7 seconds
  });
}

function cleanFloor() {
  return new Promise((resolve, reject) => {
    console.log("Cleaning the floor has started");
    setTimeout(() => {
      console.log("Cleaning the floor has completed");
      resolve();
    }, 5000); // Simulating cleaning floor time of 5 seconds
  });
}

function startWork() {
  const startTime = new Date();
  console.log("Start time:", startTime);

  cooking()
    .then(() => washDishes())
    .then(() => cleanFloor())
    .then(() => {
      const endTime = new Date();
      console.log("End time:", endTime);
      const totalTimeInSeconds = (endTime - startTime) / 1000;
      console.log("Total time taken:", totalTimeInSeconds, "seconds");
    });
}

//startWork();
