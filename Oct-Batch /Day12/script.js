var ch = 'c' // -> anything inside a single inverted commas is a character 

// -> set of character or collection of characters is called strings 

var ch1 = '1' // -> here 1 is not a number rather it's a character 

var ch2 = '$'

var str = "c"  // Note here that it is not a character 


// Hrere we can say anything written in double inverted commas is called string 

var str1 = "v" // a string can be a character also, note it is not a charater, rather it is a string having one charcter 
var str1 = "Viaksh" // a string can be a collection of character i.e a word 


var str2 = "Hey, I am Vikash. " // a string can be a collection of words 


var str3 = "" // it is also a string -> Note -> it is a string having no character \


// Note that the followings are not called as properties of string rather it is called methods of string 

// Now let's c soome Methods of Strings 


// length method 

var x = str.length;

// console.log("Length of the String 1 is   ->  " + x);


var y = str2.length;

console.log("The length of the String 2 is  ->   " + y);


var a = "" // lenght of a is 0
var b = " " // length of b is 1


// Now let's shift to some good methods 

// to uppercase 

var aa = str2.toUpperCase() // it just simpally converts all the lower case characters to the upper case character

console.log(aa);

var bb = aa.toLowerCase(); // it just simpally converts all the upper case characters to the lower case characters 


console.log(bb)

var xx = "This is a string"
var aaa = xx.startsWith('T') // it generally checks weather the string starts with the given word/ character  or not 

console.log(aaa)

// then we ahvae another method which is ends with 


var xa = xx.endsWith(' ')
console.log(xa)


var idx = xx.indexOf('T')  // this give the first occurence of the character in the entire string 
// if there will be multiple occurence of the same character then it will simpally returns the first occurence of the character 

console.log(idx)


var ldx = xx.lastIndexOf('T') // this simapally returns the last occured index of character in the string 


console.log(ldx)

 
var char = xx.charAt(3) // this will simpally return the charater at that particular index 

console.log(char)


// Now let's look at some interesting methods 

var slc = xx.slice(2, 6)
console.log(slc)


// then we have replce 

var yy = xx.replace("string", "collection") // it just go and find that string and replace it with the given string 

console.log(yy)


// Now we have to String 
 
var num = 426534758  // Note right now it num is stotring a Integer value 

console.log(typeof num)
var mnum = num.toString();


console.log(typeof mnum)