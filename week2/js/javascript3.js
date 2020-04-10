function changeParaText() {
    //after . you will see attributes and methods of this object
    //. means mine, his, her, your
    // document is my file
    // getElementById is one method belongs to document
    targetPara = document.getElementById("mypara");
    //my paragraph is an object
    //my paragraph has attribute innerText
    numA = document.getElementById("numA");
    numB = document.getElementById("numB");
    a = Number(numA.value);
    b = Number(numB.value);
    c = a * b;
    // b = 3;
    // c = a + b;


    targetPara.innerText = c;
    targetPara.style.fontSize = "50px";
    targetPara.style.backgroundColor = "red";
    targetPara.style.color = "white";
}

function changeMyValue(e) {
    e.innerHTML = "I changed";
}
