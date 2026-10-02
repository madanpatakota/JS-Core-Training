// Match a number against different cases.
// For this example: 1 = Sunday, 2 = Monday, ... 7 = Saturday.

let dayNumber = 2;

switch (dayNumber) {
    case 1:
        console.log("It is Sunday");
        break;

    case 2:
        console.log("It is Monday");
        break;

    case 3:
        console.log("It is Tuesday");
        break;

    case 4:
        console.log("It is Wednesday");
        break;

    case 5:
        console.log("It is Thursday");
        break;

    case 6:
        console.log("It is Friday");
        break;

    case 7:
        console.log("It is Saturday");
        break;

    default:
        console.log("Invalid day number. Enter a number from 1 to 7.");
}

// Output:
// It is Monday

// Change dayNumber to 7 to display Saturday.
// Change dayNumber to 10 to display the default message.

// switch uses strict equality when matching cases.
// The string "2" does not match the number 2.
// Try: let dayNumber = "2"; -> Default message