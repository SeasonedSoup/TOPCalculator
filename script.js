const add = function(x, y) {
    return x + y;
};
const subtract = function(x, y) {
    return x - y; 
};

const multiply = function(x, y) {
    return x * y;
};

const divide = function(x, y) {
    return x / y;
}

let firstNum = 2;
let operator =  '+';
let secondNum =3;

//operate calls the four operator function based on string
const operate = function(operator, firstNum, secondNum) {
    switch(operator){
        case '+':
            return add(firstNum, secondNum);

        case '-':
            return subtract(firstNum, secondNum);
        
        case '*':
            return multiply(firstNum, secondNum);
        
        case '/':
            return divide(firstNum, secondNum)
    }
        
}