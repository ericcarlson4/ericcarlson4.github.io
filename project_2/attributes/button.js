$(document).ready(function () {


    /* Toggle On */
    $(".learn_more").click(function () {
        $(".").toggleClass("empty_info");
        $(".").toggleClass("big_info");
    });

    /* Toggle Off */
    $("#back").click(function () {
        $(".").toggleClass("big_info");
        $(".").toggleClass("empty_info");
    });
});
