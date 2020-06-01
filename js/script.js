$(document).ready(function(){

    $('#slides').superslides({
        animation: 'fade',
        animation_speed: 'normal',
        play: 2500,
    });

    var typed = new Typed(".typed", {
        strings: ["Web Developer", "Programmer", "Student", "Self-learner"],
        typeSpeed: 85,
        loop: true,
        showCursor: false
        });

});