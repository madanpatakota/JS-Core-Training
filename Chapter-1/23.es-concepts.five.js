
/**************** Modules in Javascript */
/***********Module is the way of split the  code into separate files. */
/***************Here we have to use import and export keywords */

export var productType = "mobile";


export function add(a,b)
{
    return a+b;
}



/*Task*/


export class mobileGoods {
    productType = "mobile";
    location    = "UK";
    getproductDetails(){
        return ["iphone" , "1,00,000"]
    }
}


export class garmentsGoods {
    garmentType = "Louis Phillppe";
    location    = "Australia";
    getproductDetails(){
        return ["shirts" , "5000"]
    }
}
