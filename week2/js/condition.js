function calculateGrade() {
    markInput = document.getElementById("markInput");
    mark = markInput.value;
    if (mark < 50) { //condition
        pass = "No"; //if condition is true, action pass equals No
    } else { //otherwise
        pass = "Yes"; //action pass equals yes
    }
    showPass = document.getElementById("showPass");
    showPass.innerHTML = pass;

    showGrade = document.getElementById("showGrade")
    // if (mark > 90 && mark <= 100){
    //     grade = "A";
    // }
    // if (mark > 70 && mark <=90){
    //     grade = "B";
    // }
    // if (mark >= 50 && mark <= 70){
    //     grade = "C";
    // }
    // if (mark >= 0 && mark <50){ // && means and
    //     grade = "D";
    // }
    // if (mark>100 || mark <0){ // || means or      ! means not
    //     grade = "Wrong input";
    // }
    if (mark > 100 || mark < 0) {
        grade = "Wrong input";
    } else if (mark >= 90) {
        grade = "A";
    } else if (mark >= 70) {
        grade = "B";
    } else if (mark >= 50) {
        grade = "C";
    } else {
        grade = "D";
    }
    showGrade.innerText = grade;

}

function showMarkRange() {
    gradeSelection = document.getElementById("gradeSelect");
    grade = gradeSelection.value;
    switch (grade) {
        case "A":
            range = "90 to 100";
            break;
        case "B":
            range = "70 to 90";
            break;
        case "C":
            range = "50 to 70";
            break;
        case "D":
            range = "less than 50";
            break;
        default:
            range = "please select";
            break;
    }
    showRangePlace = document.getElementById("showRange");
    showRangePlace.innerText=range;
}

