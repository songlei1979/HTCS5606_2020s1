/*Initialize my calculator*/
function initialCalculator() {
    number1 = 0;
    number2 = 0;
    result = 0;
    sign = "";
    resultPlace = document.getElementById("resultPlace");
    signClickTimes = 0;
}

function calculate() {
    console.log(sign);
    switch (sign) {
        case "divide":
            result = Number(number1) / Number(number2);
            if (number2 == 0) {
                result = "Error";
            }
            break;
        case "times":
            result = Number(number1) * Number(number2);
            break;
        case "delete":
            result = Number(number1) - Number(number2);
            break;
        case "plus":
            result = Number(number1) + Number(number2);
            break;
    }
}

function clickEqual() {
    number2 = resultPlace.value;
    calculate();
    resultPlace.value = result;
    console.log("clicktime: "+signClickTimes);
    console.log("number1: "+number1);
    console.log("number2: "+number2);
    console.log("result: "+result);
    console.log("sign: "+sign);
    signClickTimes = 0;
}

function clickSign(e) {
    if (signClickTimes == 0){
        number1 = resultPlace.value;
        resultPlace.value = 0;
        console.log("clicktime: "+signClickTimes);
        console.log("number1: "+number1);
        console.log("number2: "+number2);
        console.log("result: "+result);
        console.log("sign: "+sign);
    }else if (signClickTimes == 1){
        number2 = resultPlace.value;
        calculate();
        resultPlace.value = result;
        console.log("clicktime: "+signClickTimes);
        console.log("number1: "+number1);
        console.log("number2: "+number2);
        console.log("result: "+result);
        console.log("sign: "+sign);
        number1 = result;
    }else {
        number2 = resultPlace.value;
        calculate();
        resultPlace.value = result;
        console.log("clicktime: "+signClickTimes);
        console.log("number1: "+number1);
        console.log("number2: "+number2);
        console.log("result: "+result);
        console.log("sign: "+sign);
        number1 = result;
    }
    sign = e.value;
    signClickTimes+=1;
}

/*
Click number will take value from the button
 */

function clickNum(e) {
    num = e.value;
    if (resultPlace.value.toString() == '0' || (number1 == result)) {
        resultPlace.value = num;
        result = -1;
    } else {
        resultPlace.value = resultPlace.value.toString() + num;
    }
}

function clickDot() {
    // wait all number done
}

/*AC clear the calculation and screen*/
function clickAC() {
    number1 = 0;
    number2 = 0;
    hasPreviousCalculation = false;
    isNumber1Ready = false;
    isNumber2Ready = false;
    result = 0;
    sign = "";
    resultPlace.value = 0;
    signClickTimes= 0;
}

function convertSign() {
    resultPlace.value = Number(resultPlace.value) * -1;
}

function persentage() {
    resultPlace.value = Number(resultPlace.value) / 100;
}
