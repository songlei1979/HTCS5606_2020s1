function showString() {
    myInput = document.getElementById("userMessage");
    myString = myInput.value;
    // myString = "Hello World"; //everything in between " " is string
    myPara=document.getElementById("stringExample");
    myPara.innerText = myString;
}

function calculate() {
    num1Input = document.getElementById("num1Input");
    num2Input = document.getElementById("num2Input");
    var num1 = parseFloat(num1Input.value); //var means define the after word to be a variable, in one file, you only do this once
    var num2 = parseFloat(num2Input.value); // parseFloat will convert your string to double
    var result = num1+num2;
    //result = num1 * num2;
    var resultPara = document.getElementById("showCalculationResult");
    resultPara.innerText=result;

}
