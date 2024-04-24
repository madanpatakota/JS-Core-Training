
/***************** What is looping ************/

/*
Looping is noting but a sequence of instructions.
and those instructions continually repeated until a certain condition is reached.

Important Loops are in JS are while and For

while(<condition>){
                     statement ;
                     statement ;
                     statement ;
                 }
*/

var customerIDs = [];
var index = 0;
var length = 10;

while(customerIDs <= length){
    customerIDs.push(index);  
    index += 1;
}

console.log(customerIDs);


/*   Writing the same code with for loop
                for(initliztionthevalue ; Apply the condition ; targettheinitliztionvalue){
                                    statement ;
                                    statement ;
                                    statement ;
                                 }
*/


//Example 1 : 
var FruitsList = [];
var FruitsLength = 10;

//       initlize     condition     update
//        1              3           2
for(var fruitNumber = 0; fruitNumber < FruitsLength; fruitNumber++){
    FruitsList.push("Fruit - " + fruitNumber);  
}
console.log(FruitsList);




//Example 2 : 
//Find Total price by giving the array of prices.
var customerPrices = [101.09, 200.90, 300.89, 410.78, 115.89];
var totalPrice     = 0;


//Here loop will ends when index reach out the 5
//Because the customerPrices.length returns the 5
for(var index = 0; index < customerPrices.length; index++){
    totalPrice += customerPrices[0];
}
console.log(totalPrice);


