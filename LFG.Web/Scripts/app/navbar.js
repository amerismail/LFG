﻿$(".nav a").on("click", function () {
    $(".nav").find(".active").removeClass("active");
    $(this).parent().addClass("active");
});

$("#nav-title").on("click", function () {
    $(".nav").find(".active").removeClass("active");
    $("#nav-home").addClass("active");
});