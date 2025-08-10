function isEven(number) {
    if (number % 2 === 0) {
        return true;
    }

    else {
        return false;
    }
}

const evenChecker = isEven(2);
console.log(evenChecker);


function isOdd(number) {
    if(number % 2 === 1){
        return true;
    }

    return false;
}

console.log(isOdd(10));
console.log(isOdd(11));
