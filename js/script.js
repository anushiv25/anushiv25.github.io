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

    $('.owl-carousel').owlCarousel({
        loop:true,
        items: 4,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:3
            },
            938:{
                items:4
            }
        }
    });

    var skillsTopOffset = $(".skillsSection").offset().top;
    var statsTopOffset = $(".statsSection").offset().top;
    var countupfinished = false;

    $(window).scroll(function(){
        if(window.pageYOffset > skillsTopOffset - $(window).height() + 300) {
            $('.chart').easyPieChart({
                easing: 'easeInOut',
                barColor: '#fff',
                trackColor: false,
                scaleColor: false,
                lineWidth: 4,
                size: 152,
                onStep: function(from, to, percent){
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });
        }

        if(!countupfinished && window.pageYOffset > statsTopOffset - $(window).height() + 200) {
            $('.count').each(function () {
                console.log("here");
                $(this).prop('Counter',0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 4000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.round(now));
                    }
                });
            });
            countupfinished = true;
        }
        
    });

    $(".first").height($(".second").height()); //for making height of stats container same

});

