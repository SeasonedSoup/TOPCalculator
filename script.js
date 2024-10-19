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
//strings
let firstNum = '';
let operator =  '';
let secondNum = '';
let answer = '';
//result
const result = document.querySelector('input#result')

//operate calls the four operator function based on string
const operate = function(operator, firstNum, secondNum) {
    switch(operator){
        case '+': return add(firstNum, secondNum);

        case '-': return subtract(firstNum, secondNum);
        
        case '*': return multiply(firstNum, secondNum);
        
        case '/': return secondNum!== 0 ? divide(firstNum, secondNum): NaN;

        default:
            return NaN;
    }
}

// UI LOGIC

const numButtons = document.querySelectorAll("button.num")

numButtons.forEach((numButton) => {
    numButton.addEventListener('click', () => {
        const value = numButton.textContent;
        if (operator === ''){
            firstNum += value;
            result.value = firstNum
        } else {
            secondNum += value;
            result.value = firstNum + ' ' + operator + ' ' + secondNum;
        }
    });
});

const opButtons = document.querySelectorAll("button.op");

opButtons.forEach((opButton) => {
    opButton.addEventListener('click', () => {
        checkButton();
        operator = opButton.textContent
        result.value = firstNum + ' ' + operator
    })
})

function checkButton() {
    if (firstNum !== '' && secondNum !== '') {
        answer = operate(operator, parseFloat(firstNum), parseFloat(secondNum));
        if (isNaN(answer)) {
            showError();
        } else {
            result.value = answer;
           
            firstNum = answer.toString();
            secondNum= '';
            operator = '';
        }
    }
}

const equalButton = document.querySelector("button.equal");

equalButton.addEventListener('click', () => {
    if(secondNum !== '') {
        answer = operate(operator, parseFloat(firstNum), parseFloat(secondNum));
        if (isNaN(answer)) {
            showError();
        } else {
        result.value = answer;

        firstNum = answer.toString();
        secondNum= '';
        operator = '';
        }
    }
})

// misc
function showError() {
    result.value = "Error";
    firstNum = '';  
    secondNum = '';  
    operator = '';
}

const clear = document.querySelector("button.allClear")

clear.addEventListener('click', () => {
    firstNum = '';  
    secondNum = '';  
    operator = '';
    result.value = '0'
})

const del = document.querySelector("button.delete")

del.addEventListener('click', () => {
    if (secondNum !== ''){
        secondNum = secondNum.slice(0, -1);
        result.value = firstNum + ' '  + operator + ' ' + secondNum;
    } 
    else if (operator !== '') {
       operator = operator.slice(0, -1);
       result.value = firstNum + '' + operator;
    } 
    else if  (firstNum !== '') {
        firstNum = firstNum.slice(0, -1);
        result.value = firstNum;
    }
})