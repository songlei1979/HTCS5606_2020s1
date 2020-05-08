$(document).ready(function () {
    $(".topItem").mouseenter(function () {
        // I use a class here, because I think we will have lots of dropdown menus
        //this, is the topItem you mouse on.
        //next() is a jquery function, which find the next element, in my html, the next element is a divider (class: level2)
        //I set that divider (class: level2) display block, in css, they are hided
        $(this).next().css("display", "block");
    });
    $(".level1").mouseleave(function () {
        // I don't care this divider has children divider (class: level2) or not,
        // if it has level2 divider, when my mouse left, I hide this divider.
        $(this).children("div").hide();
    });
});
