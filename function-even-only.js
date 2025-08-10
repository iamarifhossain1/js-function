// function evenNumber(numbers) {
//     let even = [];
//     for (const number of numbers) {
//         if (number % 2 === 0) {
//             // console.log(number);
//             even.push(number);
//         }
//     }
//     return even;
    
// }

// const numbers = [2, 11, 28, 9, 15, 46, 23, 68,];
// const evens = evenNumber(numbers);
// console.log(evens);

function sumOfEvenNumbers(numbers) {
    let sum = 0;
    for (const number of numbers) {
        console.log(number);
        if (number % 2 === 0) {
            sum = sum + number;
        }
    }

    return sum;
}

const evenNums = [2, 4, 11, 25, 18, 42, 28, 98, 79, 72, 29];
const sumOfAll = sumOfEvenNumbers(evenNums);
console.log('Sum of All Even Numbers:', sumOfAll);


