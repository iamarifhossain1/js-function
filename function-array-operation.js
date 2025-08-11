function sumOfNumber(numbers) {
    let sum = 0;
    for (const number of numbers) {
        console.log(number);
        sum = sum + number;
    }

    return sum;
}

const numbs = [10, 15, 20, 25, 30];
const sum = sumOfNumber(numbs);
console.log('Sum of Number is:', sum);

