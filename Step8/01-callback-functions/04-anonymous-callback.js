// An anonymous function has no explicit function name.
// We can pass it directly as an argument.

function setMyName(callbackFn) {
    setTimeout(callbackFn, 3000);
}

setMyName(function () {
    console.log("My name is Madan!");
});

console.log("Anonymous callback scheduled");

/*
Expected output:
Anonymous callback scheduled
My name is Madan!              // After the delay
*/