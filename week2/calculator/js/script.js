/*Initialize my calculator*/
function initialCalculator() {
    number1 = 0;
    number2 = 0;
    hasPreviousCalculation = false;
    result = 0;
    sign = "";
    resultPlace = document.getElementById("resultPlace");
}

function calculate() {
    hasPreviousCalculation = true;
    switch (sign) {
        case "divide":
            result = number1/number2;
            if (number2 == 0){
                result = "Error";
            }
            break;
        case "times":
            result = number1*number2;
            break;
        case "delete":
            result = number1 - number2;
            break;
        case "plus":
            result = number1 + number2;
            break;
    }
}

function clickDivide() {
    number1 = Number(resultPlace.value);
}

/*AC clear the calculation and screen*/
function clickAC() {
    number1 = 0;
    number2 = 0;
    hasPreviousCalculation = false;
    result = 0;
    sign = "";
    resultPlace.value = 0;
}

function convertSign() {
    resultPlace.value = Number(resultPlace.value) * -1;
}

function persentage() {
    resultPlace.value = Number(resultPlace.value)/100;
}

function clickOne() {
    num = "1";
    if (resultPlace.value != 0) {
        resultPlace.value = resultPlace.value + num;
    } else {
        resultPlace.value = num;
    }
}

function clickTwo() {
    num = "2";
    if (resultPlace.value != 0) {
        resultPlace.value = resultPlace.value + num;
    } else {
        resultPlace.value = num;
    }
}

function clickThree() {
    num = "3";
    if (resultPlace.value != 0) {
        resultPlace.value = resultPlace.value + num;
    } else {
        resultPlace.value = num;
    }
}

function clickFour() {
    num = "4";
    if (resultPlace.value != 0) {
        resultPlace.value = resultPlace.value + num;
    } else {
        resultPlace.value = num;
    }
}

function clickFive() {
    num = "5";
    if (resultPlace.value != 0) {
        resultPlace.value = resultPlace.value + num;
    } else {
        resultPlace.value = num;
    }
}

function clickSix() {
    num = "6";
    if (resultPlace.value != 0) {
        resultPlace.value = resultPlace.value + num;
    } else {
        resultPlace.value = num;
    }
}

function clickSeven() {
    num = "7";
    if (resultPlace.value != 0) {
        resultPlace.value = resultPlace.value + num;
    } else {
        resultPlace.value = num;
    }
}

function clickEight() {
    num = "8";
    if (resultPlace.value != 0) {
        resultPlace.value = resultPlace.value + num;
    } else {
        resultPlace.value = num;
    }
}

function clickNine() {
    num = "9";
    if (resultPlace.value != 0) {
        resultPlace.value = resultPlace.value + num;
    } else {
        resultPlace.value = num;
    }
}

function clickZero() {
    num = "0";
    if (resultPlace.value != 0) {
        resultPlace.value = resultPlace.value + num;
    } else {
        resultPlace.value = num;
    }
}

function clickDot() {
    num = ".";
    if (resultPlace.value != 0) {
        resultPlace.value = resultPlace.value + num;
    } else {
        resultPlace.value = 0;
    }
}
