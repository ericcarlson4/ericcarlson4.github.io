$(document).ready(function () {


    /* Toggle On */
    $(".learn_more").click(function () {
        $(".empty_info").toggleClass("none");
        $(".big_info").toggleClass("visible");
    });

    /* Toggle Off */
    $("#back").click(function () {
        $(".big_info").toggleClass("none");
        $(".empty_info").toggleClass("visible");
    });
});
