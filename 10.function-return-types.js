/*************  Discussion :  function with  return type value is undefined
 *
 *    1. Return     type function give the value.
 *    2. Non Return type function do't give the value
 *  **********/

function getCustomerName() {
  var customerName = "Rober J";
  return customerName;
}

var customer_1 = getCustomerName();
console.log(customer_1);

//non-return type function or we can say void function
function getCustomerName_2() {
  var customerName = "Rober J";
}

var customer_2 = getCustomerName();
console.log(customer_2);

/********** undefined is also datatype which do't contains the nothing
            it doesnot contains the any defined value
***********/

function getCustomerIDs(list, item) {
  list.push(item); /// which will add the new value(customerIDs) at last position
  list.shift(); /// which will remove the value(customerIDs) at first position
  return list; /// latest customerIDs
}

var customerIDs = [1, 2, 3, 4];
console.log("Before the function call :::: ", JSON.stringify(customerIDs));
// JSON.stringify use ful for converts the array to the string
getCustomerIDs(customerIDs, 5);
console.log("After the function call :::: ", JSON.stringify(customerIDs));

/*================================Passing the funcitons as a parameter functions *****************

*/

function step1(callback) {
  var output = callback();
  console.log(output);
}

function getCustomerID() {
  return "Cus12345";
}

//step1(getCustomerID);
step1(function(){ getCustomerID() })
  
