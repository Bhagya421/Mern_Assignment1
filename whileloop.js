//task1
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

//task2
let n = 1, Sum = 0;
while (n <= 50) {
  if (n % 2 !== 0) {
    Sum += n;
  }   
  n++;
}
console.log("Sum of odd numbers = " + Sum);

//factorial
let num = 5;
let fact = 1;
let i = 1;
while (i <= num) {
  fact *= i;
  i++;
}
console.log(`Factorial of 5 = `+ fact);

// //prime 
let num = 2; 

while (num <= 100) {
  let isPrime = true; // assume number is prime
  let i = 2;
  while (i < num) {
    if (num % i === 0) {
      isPrime = false; 
      break;
    }
    i++;
  }
  if (isPrime) {
    console.log(num); 
  }
  num++; 
}

// //Display Fibonacci series up to n terms using a while loop.
let n = 10; 
let a = 0, b = 1; 
let i = 1;

while (i <= n) {
  console.log(a);  // print current term
  let next = a + b; // calculate next term
  a = b;            
  b = next;
  i++;
}
