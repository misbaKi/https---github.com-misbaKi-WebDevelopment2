//1....)JavaScript Program to Find the Factorial of a Number.

function factorial(num) {
    // base case
    if (num === 0 || num === 1) {
      return 1;
    } else {
      // recursive case
      return num * factorial(num - 1);
    }
  }
  console.log(factorial(6));
  console.log(factorial(1)); 
  console.log(factorial(0)); 
  

 // 2....)Write a simple JavaScript program to join all elements of the following array into
// a string.[Red,Green,White,Black]
// Expected Output :
// "Red,Green,White,Black"
// "Red,Green,White,Black"
// "Red+Green+White+Black"

myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.toString());
console.log(myColor.join());
console.log(myColor.join('+'));

// 3...)Write a JavaScript conditional statement to find the largest of five numbers.
// Sample numbers : -5, -2, -6, 0, -1

a=-5;
b=-2;
c=-6;
d= 0;
f=-1;
if (a>b && a>c && a>d && a>f)
{
    console.log(a);
}
else if (b>a && b>c && b>d && b>f)
{
    console.log(b);
}
else if (c>a && c>b && c>d && c>f)
{
    console.log(c);
}
else if (d>a && d>c && d>b && d>f)
{
    console.log(d);
}
else
{
    console.log(f);
}

// 4..)Write a JavaScript conditional statement to sort three numbers. 
// Sample numbers : 3, -7, 2

let num1 = 3;
let num2 = -7;
let num3 = 2;

if (num1 >= num2 && num1 >= num3) {
  if (num2 >= num3) {
    console.log(num3, num2, num1);
  } else {
    console.log(num2, num3, num1);
  }
} else if (num2 >= num1 && num2 >= num3) {
  if (num1 >= num3) {
    console.log(num3, num1, num2);
  } else {
    console.log(num1, num3, num2);
  }
} else {
  if (num1 >= num2) {
    console.log(num2, num1, num3);
  } else {
    console.log(num1, num2, num3);
  }
}

//5..) Write a JavaScript function that reverse a number.
// Sample Data and output:
// Example x = 32243;
// Expected Output : 34223

function reverse_a_number(n)
{
	n = n + "";
	return n.split("").reverse().join("");
}
console.log(Number(reverse_a_number(32243)));

// 6...)Write a JavaScript function that accepts a string as a parameter and counts the
// number of vowels within the string.
// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do
// not count 'y' as vowel here.
// Sample Data and output:
// Example string : 'The quick brown fox'
// Expected Output : 5

function countVowels(str) {
    let count = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
  
    for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i].toLowerCase())) {
        count++;
      }
    }
  
    return count;
  }

//  7...)Write a JavaScript function that accepts a string as a parameter and converts the
// first letter of each word of the string in upper case.
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox '

  
  let str = 'The quick brown fox';
  console.log(countVowels(str)); 
  
  function capitalize_First_Letter(text) {
    let words = text.split(" ");
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(" ");
  }
  const text = 'the quick brown fox';
  const result = capitalize_First_Letter(text);
  console.log(result); 


  // 8...)Write a Javascript program to count the number of elements in an array and Sum all the numbers in array and find total
// Example Array: [10,20,30]
 

const array = [10, 20, 30];
let count = 0;
let sum = 0;

for (let i = 0; i < array.length; i++) {
  count++;
  sum += array[i];
}

console.log(`The array has ${count} elements`);
console.log(`The sum of all the numbers in the array is ${sum}`);
console.log(`The total is ${count + sum}`);

// 9...)Print all the prime numbers until 100.


for (let i = 2; i <= 100; i++) {
    let isPrime = true;
  
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
  
    if (isPrime) {
      console.log(i);
    }
  }
  

// 10....) Print all the odd numbers until 100


for (let i = 1; i <= 100; i += 2) {
    console.log(i);
  }
  















