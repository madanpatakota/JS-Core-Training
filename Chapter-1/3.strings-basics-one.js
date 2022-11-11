
/**********How to declare the string in javascript? **********/
/******************double and single quote */
var firstName           = "John";
var LastName            = "Smith";


/*********We can use the special single quote in the javascript.**********/
   var FullName            = "Yes , it's true";
   console.log(FullName);
   var FullName            = "Yes , 'John smith' is a true lengend.";
   console.log(FullName);
   //We can use the special single quote in the javascript with the helo of the escape charcter
   var FullName            = "Yes , \"John smith\" is a true lengend.";
console.log(FullName);

/************** backtick for maintain the multi line string *************/
   var big_text            =  `Lorem Ipsum is simply dummy text of the 
                              printing and 
                              typesetting industry.
                              Lorem Ipsum has been the industry's 
                              standard dummy text ever since the 1500s,
                              when an unknown printer took a galley 
                              of type and scrambled it to make a type 
                              specimen book. 
                           `;

   var paragraph_element   =  "<p id=\"id\" style=\"background-color\"></p>";
   var my_anchor_element   =  "<a href=\"google.com\">Google.com</a>";



 /*********** Now time to focus on the What is escape charcter?
      Escape Characters are the symbol used to begin an escape command in order to execute 
      some operation. They are characters that can be interpreted in some alternate way 
      than what we intended to. Javascript uses '\' (backslash) in front as an escape character
      \'      single quote
      \""     double quote
      \\      backslash
      \n      newline
      \t      tab
*/

var making_string       = `
                           'Lorem' Ipsum is simply \"dummy\" text of the printing and 
                           typesetting industry.\n Lorem \n \t Ipsum has been the industry's 
                           standard dummy text ever since the 1500s,
                           when an unknown printer took a galley 
                           of type and scrambled it to make a type 
                           \\ specimen book. 
                           `;

console.log(making_string);
