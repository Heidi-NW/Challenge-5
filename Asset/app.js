$(document).ready(function () {

    var date = moment().format("dddd, MMMM Do YYYY");
    $('#currentDay').text(date);

    function colorCoding() {
        $(".time-block").each(function () {
            let realTime = moment().hours();
            let hour = parseInt($(this).attr("id"));

            if (hour > realTime) {
                $(this).addClass("future");
            }
            else if (hour === realTime) {
                $(this).addClass("present");
            }
            else {
                $(this).addClass("past");
            }
        })
    }
    colorCoding();

    function saveTask() {
        for (var i = 9; i < 18; i++) {
            if (localStorage.getItem("text" + i)) {
                $("#text" + i).val(localStorage.getItem("text" + i));
            }
        }
    }

    $("button").on("click", function () {
        var textarea = $(this).siblings("textarea");
        var id = textarea.attr("id");
        var value = textarea.val();
        localStorage.setItem(id, value);
    })
    saveTask();
})
