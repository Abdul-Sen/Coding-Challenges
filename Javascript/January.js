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