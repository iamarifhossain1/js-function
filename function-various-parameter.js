function evenStr(str) {
    const size = str.length;
    if (size % 2 === 0) {
        console.log('Even Size');
        return true;
    }

    else {
        console.log('Odd Size');
        return false;
    }
    console.log(str, size);
}

evenStr('Dhaka');
evenStr('Faka');


function doubleOrTripple(number, doDouble) {
    if(doDouble === true) {
        const result = number * 2;
        return result;
    }

    else {
        const result = number * 3;
        return result;
    }
}

// console.log(doubleOrTripple(5, true));
// console.log(doubleOrTripple(5, false));

function numberOfElements (numbers) {
    const len = numbers.length;
    return len;
}

numberOfElements([12,2,24,5,4567,982]);
