$(document).ready(function () {
    $("#Toggle").click(function () {
        $("#demo").toggle(3000, function () {
            alert("done");
        }); //3000 means 3000
    });

    $("#FadeIn").click(function () {
        $("#demo").fadeIn("slow");
    });

    $("#enlarge").mouseenter(function () {
        $("#demo").animate({width: "250px", height: "250px"});
    });

    $("#enlarge").mouseleave(function () {
        $("#demo").animate({width: "100px", height: "100px"});
    });

    $("#slide").click(function () {
        $("#forslide").slideDown(2000).slideUp(5000).slideDown(2000)
    });

    $("#changeTextValue").click(function () {
        currentText = $("#changeTextHere").text(); //collect current text in paragraph
        alert("Current Text: " + currentText); //show it up in popup
        $("#changeTextHere").text("Hello Lei"); //change the text in paragraph
        currentValue = $("#changeValueHere").val(); //collect current value in input box
        alert("Current Value: "+currentValue); //show it in popup
        $("#changeValueHere").val("Hello Song");//change the value in the input box
    });

});
