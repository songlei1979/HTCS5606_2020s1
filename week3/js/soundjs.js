function moveDivToMiddle() {
    // window size of my browser
    h = window.innerHeight;
    console.log(h);
    myDiv = document.getElementById("animalPictures");
    // the top of my divider will be half of my screen
    myDiv.style.top = h/2+"px";
}

function mouseOnPicture(e) {
    e.style.height = "150px";
    switch (e.id) {
        case "bird":
            sound = new Audio("sound/birds.mp3");
            sound.play();
            break
        case "cow":
            sound = new Audio("sound/cow.mp3");
            sound.play();
            break
        case "crickets":
            sound = new Audio("sound/crickets.mp3");
            sound.play();
            break
        case "horse":
            sound = new Audio("sound/horse.mp3");
            sound.play();
            break
    }
}

function mouseleavePicture(e) {
    e.style.height="50px";
    sound.pause();

}

