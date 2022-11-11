/* ********************Advanced function****************** */
/* ******************** How to use swith case , if  with return type functions****************** */


function getCustomerDetails(location,price,isAdmin){
    
    var customerDetails = [];

    var message = "";
    if(price == 1000 && location == "London"){
        customerDetails.push("John");
        customerDetails.push(1);
    }
    else if(price < 1000){
        switch(location){
            case "London":
                customerDetails.push("Robert");
                customerDetails.push(2);
            case "Wasington":
                customerDetails.push("Clerk");
                customerDetails.push(3);
            default:
                /*No customer availble in London and Wasington*/
                customerDetails.push(null); 
                 //null also one kind of datatype which contains the no value.
                 //undefined also one kind of datatype which is not defined.. No defination value.
                customerDetails.push(0)
        }
    }
    else{
         message = "No customer is available";
         customerDetails.push(message);
    }

    if(isAdmin == true){
        customerDetails.push("Admin");
    }
    
    /*Note handle the else if else conditions if you want */
    return customerDetails;
}

var customer_details = getCustomerDetails("London" , 1000 , true);
console.log(customer_details);