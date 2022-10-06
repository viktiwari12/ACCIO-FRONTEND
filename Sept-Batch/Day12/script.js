// How to print anything is javascript 

console.log("Hello World")  // print statement in javascript

var temp = 10; // integer  

var temp1 = "Hey Vikash!";  // string
var temp2 = 'c' // character 
var temp3 = false; // boolean


// -> different ways we can name variables 

var PascleCase = "VikashTiwary"

var camelCase = "vikashTiwary" // the most prefered in the Industry 

var snake_case = "viaksh_tiwary"

// NaN -> not a number 
var nan = ("vikash" / 100);


// array ->

var arr = [10, "viaskh", false, 'c', NaN, 10.5, 10] 

// Methods of array 
// accessing the elements of the array 

console.log(arr[0]) ;
for(var i = 0; i< 5; i++){
    console.log(arr[i]);
}

for(var i = 0; i< 5; i++){
    console.log(typeof(arr[i])); // this type of will return the data type of the given element 
}

console.log(arr)

var len = arr.length


// index of 
var idx = arr.indexOf("vikash") // it will just return the index of the first occurence 

var lidx = arr.lastIndexOf(10) // this will return the index of last occurence of the element in the array 

// object 

var op1 = (1 +1) // here + means add

var op2 = "1" + "1" // here + will just concatinate 

var op3 = 1 + "1" // 11; it will change the data type of int 1 to string 

//  - + ? * 

i++ // post op

++i


// let -> I will explain when I will teach functions 

var v = 10; 

v = 20; 
v = " Vikash "
const v1 = 10; // ye pattthar ki lakheer hai 

v1 = 20;

"NaN ->"  "Not a Number"

var x = "vikash"/100;


// Conditionals 
"if/ else"


if(true){
    console.log("Do this work");
}else {
    console.log("Now do this work")
}