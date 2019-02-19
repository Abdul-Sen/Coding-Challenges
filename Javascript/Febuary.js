/*
Write a function called which verifies that a coupon code is valid, the coupon is not expired.

A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".
*/
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
    if (enteredCode !== correctCode)
        return false;

    let currDate = new Date(currentDate);
    let expDate = new Date(expirationDate);
    if(currDate <= expDate)
    {
        return true;
    }
    return false;
}


/*
    Write a function that produces following output:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
*/
function accum(s) {
    let result = "";
    for(let i =0; i < s.length; i++)
    {
        result += s[i].toUpperCase();
        for(let j = 0; j < i; j++)
        {
            result += s[i].toLowerCase();
        }
        if(i != s.length -1)
            result += "-";
    }
    return result;
}

console.log(accum("ZpglnRxqenU"));