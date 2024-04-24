
/*******************How to use Plus operator in the string */

var employeeName = "Robert Plant";
var companyName  = "Google";
var extraInfo    = "And i am working with him from last 10 years"


var output = employeeName + " is one of the Employee in " + companyName ;
console.log("****** with out extra info ******" , output);

//Adding the extrainfo to the output
output = output + extraInfo;
console.log("------ with extra info -------" , output);

var another_output = employeeName + " is one of the Employee in " + companyName ;
//Adding the extrainfo to the output to the anotheroutput
another_output += extraInfo;
console.log("------ with extra info with another way -------" , another_output);



//********************* How to find the length of the string */
var employeeName = "Robert Plant";
                    //01234567891011
//length
//Declared with property signature                                          // signature means syntax
var employeeCharctersTotalLength = employeeName.length                      // i am getting the number
//Hey whats your return the value
//Hey whats your output
//Hey whats you got the ouput..


//Getting the output by method signature
var convertemployeeNameinUpperCase = employeeName.toUpperCase();
var convertemployeeNameinUpperCase = employeeName.toLowerCase();

//Getting the output by method signature with parameter
var employeeCharcteratZeroIndex = employeeName.charAt(0)    // "R"
                                                      

//Getting the output by bracket notation syntax
//Getting the output by string index syntax
var employeeCharcteratZeroIndex = employeeName[9];          // "R"
console.log(employeeCharcteratZeroIndex);

//without + operator...
var employeeDetails = employeeName.concat("is one of the google employee")   // concat means adding



//Q) How to find the nth charcter by giving the string?
//Q) "Steve Jobs"

 //var employeeName   = "Steve Jobs" ;   
 //var employeeName   = "abc Jobs" ;                                 
 var employeeLength_hardcoded_value = employeeName.charAt(11);                       //Hard coded process
 var employeeLength_softcoded_value  = employeeName.charAt(employeeName.length -1) ;  //Soft coded process


 




