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