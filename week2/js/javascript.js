function changeHeading1Attributes() {
    // 1. target element
    // 2. document get tag names
    target_elements = document.getElementsByTagName("h1");
    target_elements[0].style.color = "red";
    // target_elements[0].innerText = "I changed text in my heading 1";
    target_elements[0].style.backgroundColor = "gray";
    target_elements[1].style.color = 'black';
    target_elements[2].style.color = 'black';
}

function changeParagraphAttributes() {
    target_elements = document.getElementsByTagName("p");
    target_elements[0].style.color = "yellow";

}
