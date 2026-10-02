// An arrow function can also be passed as a callback.

function setMyName(callbackFn) {
    setTimeout(callbackFn, 3000);
}

setMyName(() => {
    console.log("My name is Madan!");
});

console.log("Arrow callback scheduled");

/*
Expected output:
Arrow callback scheduled
My name is Madan!              // After the delay
*/