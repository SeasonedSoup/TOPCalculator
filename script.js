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
//test
let firstNum = '';
let operator =  '';
let secondNum = '';
let answer = '';

const result = document.querySelector('p#result')

//operate calls the four operator function based on string
const operate = function(operator, firstNum, secondNum) {
    switch(operator){
        case '+': return add(firstNum, secondNum);

        case '-': return subtract(firstNum, secondNum);
        
        case '*': return multiply(firstNum, secondNum);
        
        case '/': return divide(firstNum, secondNum);
    }
}

// UI LOGIC

const numButtons = document.querySelectorAll("button.num")

numButtons.forEach((numButton) => {
    numButton.addEventListener('click', () => {
        if (operator === ''){
            const value1 = numButton.textContent;
            firstNum += value1;
            console.log(firstNum);
        } else {
            const value2 = numButton.textContent;
            secondNum += value2;
            console.log(secondNum)
        }

    });
});

const opButtons = document.querySelectorAll("button.op");

opButtons.forEach((opButton) => {
    opButton.addEventListener('click', () => {
        checkButton(opButton);
    })
})

function checkButton(opButton) {
    if (firstNum !== '' && secondNum !== '') {
        answer = operate(operator, parseFloat(firstNum), parseFloat(secondNum));
        result.textContent = answer;
        firstNum = answer.toString();
        secondNum= '';
    }
    operator = opButton.textContent;
}

const equalButton = document.querySelector("button.equal");

equalButton.addEventListener('click', () => {
    if(secondNum !== '') {
        answer = operate(operator, parseFloat(firstNum), parseFloat(secondNum));
        result.textContent = answer;

        firstNum = answer.toString();
        secondNum= '';
        operator = '';
    }
})