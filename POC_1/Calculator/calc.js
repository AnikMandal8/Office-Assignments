let firstOperand = "";
let secOperand = "";
let op = "";
let opFlag = false;
let result = 0;
let display = document.querySelector(".display");

//innerHTML and innerText difference?
function getkey(val) {
    console.log("val", val.innerHTML);
    if (!opFlag) {
        firstOperand += val.innerHTML;
        display.innerHTML = firstOperand;
        console.log(firstOperand);
    }
    else {
        secOperand += val.innerHTML;
        display.innerHTML = secOperand;
        console.log(secOperand);
    }

}

function getOperator(operator) {
    console.log("op", operator.innerHTML);
    opFlag = true;
    display.innerHTML = "";
    op = operator.innerHTML;
}

function calculation() {
    console.log("here", op)
    switch (op) {
        case '+':
            result = Number(firstOperand) + Number(secOperand);
            display.innerHTML = String(result);
            firstOperand = result;
            secOperand = "";
            break;

        case '-':
            result = Number(firstOperand) - Number(secOperand);
            display.innerHTML = result;
            firstOperand = result;
            secOperand = "";
            break;

        case '/':
            result = Number(firstOperand) / Number(secOperand);
            display.innerHTML = result;
            firstOperand = result;
            secOperand = "";
            break;

        case '*':
            result = Number(firstOperand) * Number(secOperand);
            display.innerHTML = result;
            firstOperand = result;
            secOperand = "";
            break;
    }
}

function deleteCal() {
    firstOperand = "";
    secOperand = "";
    op = "";
    opFlag = false;
    result = 0;
    display.innerHTML="";
}