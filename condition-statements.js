
// Concept : switch statment;

//Example : Checking the role in IT industry.

var isItOK = true;
if(isItOK){
    console.log("Iam alright")
}
else{
    console.log("Iam not good");
}



var role = "SE";

if(role == "Trainee"){
    console.log("He is a fresher and having the no expereince.")
}
else if(role == "SE"){
   console.log("He is a software engineer and having the 3 years of expereince")
}
else if(role == "SSE"){
    console.log("He is a senior software engineer and having the 6 years of expereince")
}
else{
    console.log("Record is not matching. Please check with another value.");
}


/* Same output we can do by using the swtich statements....*/

/* syntax
   switch(<value to be check>){
        case <value> :
            Statement; 
            ---------
            ---------
            break;
        
        case <value> : {
            Statement; 
            ---------
            ---------
            break;
        }

        -----
        -----
        
        default : {
            Statement; 
            ---------
            ---------
        }
   }

*/

var role = "SSE";

switch(role){
    case "Trainee": 
        console.log("He is a fresher and having the no expereince.");
        break ;
    case "SE":
       console.log("He is a software engineer and having the 3 years of expereince");
       break ;
    case "SSE":
        console.log("He is a senior software engineer and having the 6 years of expereince");
        break ;
    default :
        console.log("Record is not matching. Please check with another value.");
}

/*Note : when you are having mutli checkes better use the switch statement.*/


function getUserRole(role){
    switch(role){
        case "admin":
            console.log("He is administrator . he can modify anyting in the applicaiton.");
            break;
        case "salerep":
            console.log("He is a Sales rep. He can modify few pages.");
            break;
        case "enduser":
            console.log("He is a enduser. He just view the few pages.");
            break;
        default:
            console.log("Record is not exists.Please check with another value.")
    }
}

getUserRole("admin"); // Observe this function is non-return type function . means void function.
