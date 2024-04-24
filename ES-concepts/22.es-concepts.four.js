
/************************Introduction the class ******************

 * 1. What is class ?
 *    class a special type of the function which mantains the group the relative members.
 *    Here members are : 1. constructor(special method)
 *                       2. properties
 *                       2. methods    (normal  methods)
 * 
 * 2. Is it part of the Javascript?
 *    JavaScript didn't originally have classes. Classes were added with the introduction of ECMASCRIPT6 (es6) i mean 2015year version,
 * 
 * 
 *  How to declare the class : syntax
 *       class <classname>{
 *  
 *           constructor(){
 *                         <statement(s)>
 *                        }
 
 *               }
 *  What is constructor ?
 *  A constructor is a speical method in a class which automatically triggers when the class gets instantiated(created with object).

*/



class employee_ctr{
    /*Declaring the constructor*/
    constructor(){
           console.log("From employee_ctr Class constructor is calling.......");
    }
}

/***********************How to call the class********************** 
 * Note : Based on the instance of the class (use new keyword to create the instance)
 * 
 * What is the instance of the class?
 * A : An object which refers the class
 * 
 */

  // i said class is nothing but a special function right.
  var emp_c = new employee_ctr();



  /*************How to add the properties to the class */

  /*Declaration*/
  class employee_pro{

    /*Properties*/
    employeeID;
    employeeName ;

    /*Constructor*/
    constructor(){
           console.log("From employee_pro Class constructor is calling.......");
           //here we have to use the ------this------ keyword for use the employeeID and employeeName
           /*What is this keyword
              this keyword which refers the current object
           */
            this.employeeID = 1;
            this.employeeName = "William";

            console.log("employeeID" , this.employeeID);
            console.log("employeeName" , this.employeeName);
    }
}

/*Calling*/
var emp_p = new employee_pro();


  /*************How to pass the properties to the class */

/*Declaration*/
class employee_ctr_parms{

    /*Properties*/
    employeeID;
    employeeName ;

    /*Constructor*/
    constructor(id,name){
           console.log("From employee_pro Class constructor is calling.......");
           //here we have to use the ------this------ keyword for use the employeeID and employeeName
           /*What is this keyword
              this keyword which refers the current object
           */
            this.employeeID = id;
            this.employeeName = name;

            console.log("employeeID" , this.employeeID);
            console.log("employeeName" , this.employeeName);
    }
}

/*Calling*/
var emp_p = new employee_ctr_parms(1 , "William");



  /*************How to Add the methods to the class */
  /*declaration*/


  var emp_database = [{
    "name"     :  "Clerk",
    "location" :  "London",
    "Price"    :   190.09
  },
  {
    "name"     :  "Peter",
    "location" :  "New York",
    "Price"    :   145.09
  },
  {
    "name"     :  "Rober",
    "location" :  "London",
    "Price"    :   987.09
  }]


  class employee_mtd{
        /*Properties*/
        employeeID;
        employeeName ;

        /*Constructor*/
        constructor(id,empname){
            console.log("From employee_pro Class constructor is calling.......");
            /*  Here we have to use the ------this------ keyword for gets the employeeID and employeeName

                What is this keyword?
                this keyword which refers the current object
            */
                this.employeeID = id;
                this.employeeName = empname;

                console.log(`CONSTRUCTOR ::: - employeeID ${this.employeeID} and employee Name ${this.employeeName}`);
                
        }


        /*method
            Every method is a function in the class.
        */
        getEmployee(){
            console.log("Calling the get employee method");
            console.log(`METHOD :::: - employeeID ${this.employeeID} and employee Name ${this.employeeName}`);
        }

       getEmployeeByLocaiton(location){
        var customerRecords = emp_database.filter((employee)=>{
              return employee.location == location
         })
         return customerRecords;
       }

  }


  /*calling*/
  var emp            = new employee_mtd(1,"William");
  var emploeeRecords = emp.getEmployeeByLocaiton("London");
  console.log(emploeeRecords);



/**** How to communicate(inheritance) one class to another class */

/* By using the extends keyword */


class emp_class_1{
    constructor(id,empname){
        console.log(`emp_class_2 : CONSTRUCTOR ::: - employeeID ${id} and employee Name ${empname}`);
    }
}

class emp_class_2 extends emp_class_1{
    constructor(){
        super(1, "madan")
        console.log("emp_class_1 : emp_class_1 is calling....");
    }
}

var emp_class_2_obj = new emp_class_2();
