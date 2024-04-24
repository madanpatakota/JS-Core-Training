
// You have to start code here.


import { productType , add } from './23.es-concepts.five.js';


/**** importing the productType function */
console.log("::::::::producttype" , productType);

/**** importing the add function */
console.log("::::::::add" ,add(10,20));




//************************** */

import { productType as pt , add as addition } from './23.es-concepts.five.js';


/**** importing the productType function */
console.log("::::::::producttype" , pt);

/**** importing the add function */
console.log("::::::::add" ,addition(10,20));




//************************** */

import * as all from './23.es-concepts.five.js';


/**** importing the productType function */
console.log("::::::::producttype" , all.productType);

/**** importing the add function */
console.log("::::::::add" , all.addition(10,20));







