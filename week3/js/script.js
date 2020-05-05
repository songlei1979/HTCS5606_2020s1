function showAlert() {
    // we will use alert and console.log for debugging

    // alert("hello world");
    // console.log("Hello world in console");
    // setTimeout is used to pause the actions
    setTimeout(function () {
        alert("hello world");
        console.log("Hello world in console");
    }, 3000);
}

function showLoop() {
    // setInterval is used to loop animation or functions in javascript
    // function hello() {
    //     alert("hello world form loop");
    //     console.log("hello world from loop");
    // }
    // setInterval(hello, 3000);

    setInterval(function () {
        alert("hello world from loop");
        console.log("hello world from loop");
    }, 3000);
}

function moveImage() {
    image = document.getElementById("movingImg");
    x = 10; //left
    y = 10; //top
    speed = Number(document.getElementById("speedInput").value);
    // create a function in loop, and loop it each half second
    setInterval(function () {
        if (x <500 && y <= 10){
            x = x + speed; //move to right only
        }
        if (x >= 500 && y < 500){
            y = y + speed; //move to down only
        }
        if (x > 10 && y >= 500){
            x = x - speed; //move to left
        }
        if (x <= 10 && y >10){
            y = y - speed; //move up
        }
        image.style.left = x+"px";
        image.style.top = y+"px";
    }, 500);
}
