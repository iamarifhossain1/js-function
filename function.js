function hello () {
    console.log("I am just a Function");
}

// hello();

function moneyBag() {
    var money = 4500;
    console.log("i have" + " " + money + " " + "Taka");

}

// moneyBag();

function additionCalculator(input1, input2) {
    sum = input1 + input2;
    console.log("Result:" + sum);
    return sum;
}

const result = additionCalculator(10,12);
console.log(result);


function subtractionCalculator (input1, input2) {
    var subtraction = input1 - input2;
    console.log("Result:", subtraction);
    
}

subtractionCalculator(50,15);

function multiplyCalculator (input1, input2) {
    var multiply = input1 * input2;
    console.log("Result:", multiply);
}

multiplyCalculator (10,12);


function divideCalculator (input1, input2) {
    var divide = input1 / input2;
    console.log("Result:", divide);
}

divideCalculator (20, 5);