function changeAllTagText() {
    tagElements = document.getElementsByTagName("h1");
    //searching all elements with tag name "h1"
    // if searching elements, does not only give one element back
    // if I have many elements, I will have an array, not only one element
    //[0], [1], [2] ....
    // if I don't know how many of them, we need to use loop

    i = 0; //start from 0
    while (i<tagElements.length){ //each array has attribute length, we use length to check the number of elements
        tagElements[i].innerText = "I have changed all text in Heading 1";
        tagElements[i].style.fontSize = "50px";
        i = i + 1; //add 1 on
    }
}

function changeAllClassText() {
    classElements = document.getElementsByClassName("group1");
    i = 0;
    while (i<classElements.length){
        classElements[i].innerText = "I have changed all text in class group1";
        i = i + 1;
    }
}

function changeIDText() {
    idElement = document.getElementById("heading5");
    idElement.innerText = "I have changed text in id heading5";
}
