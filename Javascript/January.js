/*
Q- Create a function isDivisible(n, x, y) that checks if a number n is
divisible by two numbers x AND y. All inputs are positive, non-zero digits.
*/
function isDivisible(n, x, y) {
    if (n % x == 0 && n % y == 0) //if no remainders with both x and y, meaning it is fully divisible
        return true;
    return false;
}

/*
Q- Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
*/
function doubleChar(str) {
    let duplicate = str;
    let newStr = ""; //our final string

    for (let i = 0; i < str.length; i++) {
        newStr += duplicate[i] + str[i]; //add a letter of duplicate and a letter of sent string
    }
    return newStr;
}

/*
Q- Write an algorithm that will identify valid IPv4 addresses in dot-decimal format.
IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.
*/
function isValidIp(str) {
    let NumArr = str.split('.');

    if(NumArr.length == 4) //if satisfies basic condition
    {
        //for each
        for(let i =0; i< NumArr.length; i++)
        {
            if(NumArr[i] < 0 || NumArr[i] > 255)
            {
                return false; //number out of range
            }
        }
        return true; //satisfies Ipv4 desc.
    }
    return false;
}

/*
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)
*/
function humanReadable(seconds) {
    let sec = Math.floor(seconds % 3600 % 60);
    let min = Math.floor(seconds % 3600 / 60);
    let hours = Math.floor(seconds / 3600); 
    if(sec <9)
    {
        sec = "0" + sec;
    }
    if(min<9)
    {
        min = "0" + min;
    }
    if(hours <9)
    {
        hours = "0" + hours;
    }

    return hours + ":" + min+":" + sec;
 }

/*
Implement the function unique_in_order which takes as argument a sequence and returns a list of items
without any elements with the same value next to each other and preserving the original order of elements.
*/

var uniqueInOrder = function (iterable) {

  if (!Array.isArray(iterable)) //converts to array if not an array
  {
    iterable = iterable.split("");
    console.log(iterable);
  }

  let TempArr = [];
  for (let i = 0; i < iterable.length; i++) {
    if(i == iterable.length -1)
    {
      if(iterable[i] != iterable[i-1])
      {
        TempArr.push(iterable[i]);
      }
      console.log(TempArr)
      return TempArr;
    }
    if (iterable[i] != iterable[i + 1]) {
      TempArr.push(iterable[i]);
    }
  }
}

/*
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
*/

function highAndLow(numbers){
    numbers = numbers.split(" ");
    console.log(typeof numbers[0]);
    let MIN = numbers[0];
    let MAX = numbers[0];

    for(let i =0; i< numbers.length; i++)
    {
        if(MIN > numbers[i])
        {
            MIN = numbers[i];
        }

        if(MAX< numbers[i])
        {
            MAX = numbers[i];
        }
    }
    return (MAX+ " " + MIN);
}


/*
As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.
The input to the function will be an array of three distinct numbers (Haskell: a tuple).
*/
var gimme = function (inputArray) {
    let arrCopy = [...inputArray]; //ES7 Spread syntax method of cloning an array
    arrCopy.sort((a, b) => a - b); //sort() defaultly sorts alphabatically, so we need a function that checks numerically

    for(let i =0; i< inputArray.length; i++)
    {
        if(inputArray[i] == arrCopy[1]) //finding middle num
        {
            return i;
        }
    }
  };

/*
Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 integers. No floats or empty arrays will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
*/

function sumTwoSmallestNumbers(originalArray) {
    let numbers = [...originalArray];
    let MIN = Math.min(...numbers); //destruction assignment syntax turns numbers into distint variables
                                   //, which is what the min() function needs to determine the minimum value

    numbers.splice(numbers.indexOf(MIN),1); //poping minimum value
    let MIN2  = Math.min(...numbers); //finding new minimum
    return MIN + MIN2;
};


//ALTERNATIVE METHOD: Just sort the array and find return the first two elements!. NOTE: The following implimentation is not done by me.
// function sumTwoSmallestNumbers(numbers){  
//     numbers = numbers.sort(function(a, b){return a - b; });
//     return numbers[0] + numbers[1];
//   };


/*
See if a string contains same number of x and O's
*/
function XO(str) {
    str = str.toUpperCase();
    let X = 0;
    let O = 0;
    for(let i =0 ; i <str.length; i++)
    {
        
        switch(str.charAt(i)) {
            case('X'):
            X++;
            break;
            case('O'):
            O++;
            break;
        }
    }
    if(X == O)
    {
        return true;
    }
    return false;
}
/*
In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.
*/
function alphabetPosition(text) {
    let charPos = "";
    
    for(let i = 0; i< text.length; i++)
    {
        if(/^[a-zA-Z]+$/.test(text[i])) //if all english alphabets
        {
            if(/^[A-Z]+$/.test(text[i])) //if uppercase english alpabet
            {
                charPos += text.charCodeAt(i) - 64;
            }
            
            if(/^[a-z]+$/.test(text[i])) //if lowercase english alphabet
            {
                charPos += text.charCodeAt(i) - 96;
            }
            if(i != text.length-1)
            {
                charPos += " ";
            }
        }
    }
    return charPos;
  }

/*
Complete the function scramble(str1, str2) that returns true if a portion of str1 characters
can be rearranged to match str2, otherwise returns false.

Notes:
Only lower case letters will be used (a-z). No punctuation or digits will be included.
Performance needs to be considered
Input strings s1 and s2 are null terminated.
*/
//TODO: Currently this is TOO SLOW! Find a faster alternative
function scramble(str1, str2) {
      let str1Temp  = str1.split("");
      let str2Temp = str2.split("");
      if(str1.length < str2.length)
      {
          return false;
      }
      let finalString = "";
      for(let i = 0 ; i < str2Temp.length; i++)
      {
          for(let j = 0 ; j < str1Temp.length; j++)
          {
              if(str2Temp[i] == str1Temp[j])
              {
                 finalString += str1Temp.splice(j, 1);
                 console.log(str1Temp);
                 break;
              }
          }
      }
      if(finalString == str2)
      {
          return true;
      }
      return false;
}

console.log(scramble("aabbcamaomsccdd","commas"));