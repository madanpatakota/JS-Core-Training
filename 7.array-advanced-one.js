 
 /***** How to push the new value to the array *******/


 var customerIDs_1 = [1,2,3];                       //Note : make it proper reference variable name
 customerIDs_1.push(4);
 console.log(customerIDs);

 var customerIDs_1 = ["John" , "Robert" , "Peter"]; //Note : make it proper reference variable name
 customerIDs_1.push("James");
 console.log(customerIDs_1);


 var customerIDs_1 = [ ["smith", 10, "London"]  , "John" , 1200.09 , "Londan"];
 customerIDs_1.push(["Mary", 10, "London"] );
 //conclusion : After i push the value i could see that latest value place in last position 



  /***** How to pop(remove) the value to the array *******/

 var customerIDs_2 = [1,2,3];      //Note : make it proper reference variable name
 customerIDs_2.pop();
 console.log(customerIDs_2);

 var customerNames_2 = ["John" , "Robert" , "Peter"]; //Note : make it proper reference variable name
 customerNames_2.pop();
 console.log(customerNames_2);

 var customerPersonalDetails_3 = [ ["smith", 10, "London"]  , "John" , 1200.09 , "Londan"];
 customerPersonalDetails_3.pop();
 console.log(customerPersonalDetails_3);


 /***** How to shift(first remove) the value to the array *******/
 var customerIDs_3 = [1,2,3];      //Note : make it proper reference variable name
 customerIDs_3.shift();
 console.log(customerIDs_3);

 var customerIDs_3 = ["John" , "Robert" , "Peter"]; //Note : make it proper reference variable name
 customerIDs_3.shift();
 console.log(customerIDs_3);

 var customerIDs_3 = [ ["smith", 10, "London"]  , "John" , 1200.09 , "Londan"];
 customerIDs_3.shift();


 
 /***** How to unshift(first add) the value to the array *******/
 var customerIDs_4 = [1,2,3];      //Note : make it proper reference variable name
 customerIDs_4.shift();
 console.log(customerIDs_4);

 var customerIDs_4 = ["John" , "Robert" , "Peter"]; //Note : make it proper reference variable name
 customerIDs_4.shift();
 console.log(customerIDs_4);

 var customerIDs_4 = [ ["smith", 10, "London"]  , "John" , 1200.09 , "Londan"];
 customerIDs_4.shift();













