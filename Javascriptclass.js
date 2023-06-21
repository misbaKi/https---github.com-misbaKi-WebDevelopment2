// Find a sum of three number, third number defaulting to 10
function sumThreeNumbers(num1, num2, num3 = 10) {
    return num1 + num2 + num3;
  }
  console.log(sumThreeNumbers(2, 4)); 
  console.log(sumThreeNumbers(3, 6, 8)); 

  
// Use a short hand operator for multiplying the given number by 12
let x = 3;
console.log(x *= 12);



// Find a given number is odd or even 
let number = 7;
if (number % 2 === 0) {
    console.log(number + " is even");
} else {
    console.log(number + " is odd");
}


// Find a given number is divisible by 10
let num = 30;
if (number % 10 === 0) {
    console.log(number + " is divisible by 10");

} else {
    console.log(number + " is not divisible by 10");
}


//Find a greatest of three numbers

let num1 = 10;
let num2 = 20;
let num3 = 15;
let greatest;

if (num1 >= num2 && num1 >= num3) {
    greatest = num1;
} else if (num2 >= num1 && num2 >= num3) {
    greatest = num2;
} else {
    greatest = num3;
}

console.log("The greatest of " + num1 + ", " + num2 + " and " + num3 + " is " + greatest);

