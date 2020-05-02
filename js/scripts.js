//script for carousel

$(function () {
    //speed of carousel
    $(".carousel").carousel({
        interval: 2000
    });

    //carousel button functionality
    $("#carouselButton").click(function () {
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause");
        }
    });
});

//script for login button modal
$('#loginButton').click(function () {
    $('#loginModal').modal('show')
})




//script for reserve button modal 

$('#reserveButton').click(function () {
    $('#reserveModal').modal('show')
})