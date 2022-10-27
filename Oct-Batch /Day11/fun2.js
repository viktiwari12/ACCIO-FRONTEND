a()
b()
console.log(a)
console.log(b)
function a() {
    console.log("Hey Vikash, What's up? ")
}


function b() { // this is a non parameterised function 
    console.log("Hey amit, What's up? ")
}

a // this is just a variable a 
a() // this is invocking the function 


// In JavaScript -> Function's name behave like a variable 

function fun1(a, b, c, d){
    console.log(a)
    console.log(b)
    console.log(c)
    console.log(d)

    var sum = a+ b + c+ d 
    console.log(sum);
}

console.log(fun1)

fun1(10, 20, 30, 40);