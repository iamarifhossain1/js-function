/** Task-1
 * Take four parameters. Multiply the four numbers and then return the result
 */

function multiply(num1, num2, num3, num4) {
    const multi = num1 * num2 * num3 * num4;
    return multi;
}

const output = multiply(2,4,6,8);
// console.log(output);


/** Task-2
 * Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
 */

function evenOrOdd(number) {
    if (number % 2 === 1) {
        const result = number * 2;
        return result;
    } 

    else {
        const result = number / 2;
        return result;
    }
}

const number = evenOrOdd(21);
// console.log(number);

/**ask-3
 * Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
 */

function make_avg(numbers) {
    let sum = 0;
    let average = [];
    for (const number of numbers) {
        console.log(number);
        sum = sum + number;
        average = sum / 6;
    }
    return average;
}


const sumNums = [11, 25, 49, 62, 204, 55];
const totalSum = make_avg(sumNums);
console.log('Sum of Average Numbers:', totalSum);


/** Task - 4
 * Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.
 */


function countZero (binarayStr) {
    let zero = 0;
    for (const str of binarayStr) {
        if (str === '0') {
            zero++;
        }
    }

    return zero;
}

const binaryNum = '1001110001'
const result = countZero(binaryNum);
console.log('Total 0 Found in This String:' ,result);

/** Task - 5
 * Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd
 */

function odd_even(numbers) {
    if (numbers % 2 === 0) {
        return 'Even Number';
    }

    else {
        return 'Odd Number';
    }
}

console.log(odd_even(2));
console.log(odd_even(27));
