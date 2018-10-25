$(document).ready(function () {


    /* Toggle On */
    $(".learn_more").click(function () {
        $("#slickQuiz").toggleClass("none");
        $(".big_info").toggleClass("visible");
    });

    /* Toggle Off */
    $("#back").click(function () {
        $("#slickQuiz").toggleClass("none");
        $(".big_info").toggleClass("visible");
    });
});
