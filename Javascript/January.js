/*
Q- Create a function isDivisible(n, x, y) that checks if a number n is
divisible by two numbers x AND y. All inputs are positive, non-zero digits.
*/
function isDivisible(n, x, y) {
    if(n%x == 0 && n%y == 0) //if no remainders with both x and y, meaning it is fully divisible
      return true;
  return false;
  }