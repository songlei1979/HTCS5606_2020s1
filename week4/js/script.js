$(document).ready(function () {
    // if you use id, please add # in front
    // # means id, #button is the selector, click() is the action
    // $ syntax from jquery $()
    $("#button").click(function () {
        // p is my selector, show() is my action
        $("p").show();
    });

    $("#button2").click(function () {
        // class group1 1 will be my selector, hide() is my action.
        // . means class
        $(".group1").hide();
    });

    $("#button3").click(function() {
        $("#p5").hide();
    });

    $("#button4").click(function () {
        $(".group2").toggle();
    });

    $("#doubleClick").dblclick(function () {
        $("p").toggle();
    });

    $("#mouse").mouseenter(function () {
        $("p").show();
    });
    $("#mouse").mouseleave(function () {
        $("p").hide();
    });
});
