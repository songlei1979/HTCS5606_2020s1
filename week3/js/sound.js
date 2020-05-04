function findCenter() {
    h = window.innerHeight;
    animalDiv = document.getElementById("animals");
    animalDiv.style.top = h/2+"px";
}

function enlangeImage(e) {
    e.style.height=300+"px";
    switch (e.id) {
        case "bird":
            audio = new Audio('sound/birds.mp3');
            audio.play();
            break;
        case "cow":
            audio = new Audio('sound/cow.mp3');
            audio.play();
            break;
        case "crickets":
            audio = new Audio('sound/crickets.mp3');
            audio.play();
            break;
        case "horse":
            audio = new Audio('sound/horse.mp3');
            audio.play();
            break;
    }
}

function normalImg(e) {
    e.style.height=50+"px";
    audio.pause();
}
