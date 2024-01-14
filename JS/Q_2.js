// check prime number

const number = parseInt(prompt("enter the number : "));

let isprime = true;

if (number === 1) {
  console.log("1 is neither prime nor compostion number :");
} else if (number > 1) {
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      isprime = false;
      break;
    }
  }

  if (isprime) {
    console.log(`$(number) is a prime number `);
  } else {
    console.log(`$(number) is not  prime number `);
  }
} else {
  console.log("the number is not a prime number. ");
}
