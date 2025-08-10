function doubleIt(number){
    const doubled = number *2;
    console.log(number, doubled);
    
}

doubleIt(15);
console.log('----------------');
doubleIt(88);
console.log('----------------');
doubleIt(873);
console.log('----------------');
const number = 55;
doubleIt(55);
console.log('----------------');
const money = 112;
doubleIt(money);

function difference(num1, num2) {
    const diff = num1 - num2;
    console.log(num1, num2, 'Age difference is:', diff);
}

const fatherAge = 40;
const myAge = 13;
difference(fatherAge, myAge);