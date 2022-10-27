// Arrays is Javascript

// In JS -> Array is simpally  a collection of data. Note here, data can be of multiple data types also. 
var arr = [10, "Vikash", "Archit", false, 45.5, 'c']; // Note :- In other languages symbol of array is {} but is JS it is []

console.log(arr)

// Now we will see Arrays and their methods mode deeply 


// 1) Ways to create an array 

    // 1.1) Simple way:-  when you know all the elements of the array 
var ar = [10, "nadna", 1394, true]; 

    // 1.2) When we are not sure about the elements; 

var ar1 = new Array();
console.log(ar1)
for(var i = 0; i<ar1.length; i++){
    console.log(ar1[i]);
}
    // 1.3) When We don't know the elements we are sure about the size/ no of elements 

var ar2 = new Array(5); // Note:- It has created a array of 5 size and all the elements are stil empty

for(var i = 0; i<ar2.length; i++){
    console.log(ar2[i]);
}


// Now Let's shift to Methods of Arrays. 

// Length
var l = arr.length
console.log("Lenght of the Array is " + l);


//Accessing the elements of array in JS

console.log("First Element of the array is " + arr[0]);
console.log("Second Element of the array is " + arr[1]);
console.log("Third Element of the array is " + arr[2]);
console.log("Fourth Element of the array is " + arr[3]);
console.log("Fifth Element of the array is " + arr[4]);
console.log("Sixth Element of the array is " + arr[5]);
 

// Note that Indexing starts form 0 and elements counts starts from 1. 


// Sort Method 

// It will simpally sort the Array 

var ar3 = ["Vikash", "Akash", "Arti", "Gurpurv", "Kunal", "Bhavna", "Dev", "Nikunj", "Sahil" ]
console.log(ar3) // Original Array (Which is unsorted)
ar3.sort();
console.log(ar3) // Same array after sorting


// The next Method is Reverse


var arr4 = ar3.reverse();

console.log(arr4)


// Adding and Removing elements at the end of the array 

// PUSH -> It simpally add an element at the end of the array 

ar3.push("Last element Added");
console.log(ar3)

//Pop -> It simaplly removes the last element

ar3.pop();
console.log(ar3);

// Adding and Removing elements from the start


// UnSift -> It simpally add an element at the start (or at the 0th index) of the element Note:- It will not replace the prior elemet at 0th 

ar3.unshift("Frist Element Added ")
console.log(ar3);


// Shift -> it will simapally delete the first character 

// concatinate 


var ar5 = ar.concat(ar3);
console.log(ar5)

// IS Array  -> It will simpally tell weather it is an array of not 

var x = Array.isArray(ar1);
console.log(x)

var y = 10;

console.log(Array.isArray(y))



// Index of 

// It will simpally return the first index (Or we can say the index at which it occured for the first time)

var xx = [10, 20, 30, 40, 30, 30, 80, 30]

console.log(xx.indexOf(30))


// Similar to the above one we also have Last index :- It simpally returns the last index or the index at which the elemet occured at the last time in the array 
console.log(xx.lastIndexOf(30))



// slice  :- You can consider it as a sice of a cake 

// what we mean is, simpally take a portion, 


var slc = xx.slice(2, 5) // Note here:- It includes the starting index but elcludes the last index (It will consider 2, 3 & 4th elemnt)
console.log(slc)


