const myArray = [];

function validateIssuers(myArray){
    if(myArray[0] === 3 && myArray[1] === 4 || myArray[0] === 3 && myArray[1] === 7) {
        console.log('Card Issuer: Amex');
    } else if(myArray[0] === 3 && myArray[1] === 0 || myArray[0] === 3 && myArray[1] === 6 || myArray[0] === 3 && myArray[1] === 8) {
        console.log('Card Issuer: Diners');
    } else if(myArray[0] === 4) {
        console.log('Card Issuer: Visa');
    } else if(myArray[0] === 5) {
        console.log('Card Issuer: Mastercard');
    } else if(myArray[0] === 6) {
        console.log('Card Issuer: Discover');
    } else {
        console.log('Card Issuer: Unknown');
    }
};

function validateNumbers(myArray) {
    let newArray = myArray.reverse();
    for(let i = 0; i < newArray.length; i++) {
        if(i % 2 !== 0) {
            newArray[i] *= 2;
        if(newArray[i] > 9) {
            newArray[i] -=9;
        } else {
            newArray[i] = newArray[i];
        }
        }
    }

    let mySum = newArray.reduce((a,b) => a + b, 0);
    if(mySum % 10 === 0) {
        console.log('Valid Card');
    } else {
        console.log('Invalid Card');
    }
};
validateIssuers(myArray);
validateNumbers(myArray);


