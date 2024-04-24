var employeeName = "Robert plant";
var employeename_charat_method = employeeName.charAt(0); 

/*
  Try to understand below :
  when employeeName is going to call the charAt method by using 0 parameter
  i am getting the 'R' value as return type ....
*/


/* Can i create the my own method like charAt ? like charAt12345 ******
   like employeeName.charAt12345(0);
   A: We do't have the charAt12345 method in JS. we can do by using the prototype.
*/



/*  Basics about the function */
/*  ================ function =========================

    Q) What is the function ?
    A: Collection of the statements .
       We can executes all statements at a single time by the function name.

    Q) How to declare the sample function and how to call that?
       I mean syntax
        function <function_name>{ 
            -----------------------;   // 1. statement.
            -----------------------;   // 2. statement.
        }
        
        i am getting the Hello world as the return type.... 
*/

function first_method_one(){
    var name = "Hello world";
     return name;
}


function first_method_two(){
    var name = "Hello world";
}

//Note : function are 2 types 1. return type function .. 2. non-retuntype function.

console.log(first_method_one());   // is a return type function
console.log(first_method_two());  // is a non-return type function


function ____________(){
    //statement.......;
    //statement.......;
    //statement.......;
}


function performTask(FirstMessage , SecondMessage , ThirdMessage){
    console.log(FirstMessage);
    console.log(SecondMessage);
    console.log(ThirdMessage);

    var TotalMessage = FirstMessage + SecondMessage + ThirdMessage;
    return TotalMessage;
}

var msg = performTask("Hello Goodmoring!!" , "How are you?" , "Whats up?" );
console.log(msg);


