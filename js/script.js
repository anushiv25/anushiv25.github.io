$(window).on("load", function() {
    $(".loader .inner").fadeOut(500, function() {
        $(".loader").fadeOut(700);
    });

    $(".items").isotope({
        filter: '*',
        animationOptions: {
            duration: 1500,
            easing: 'linear',
            queue: false
        }
    });
});

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
        autoplay: true,
        autoplayTimeout: 1500,
        autoplayHoverPause: true,
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

    $("[data-fancybox]").fancybox();

    $("#filters a").click(function(){
        $("#filters .current").removeClass("current");
        $(this).addClass("current");

        var selector = $(this).attr("data-filter");

        $(".items").isotope({
            filter: selector,
            animationOptions: {
                duration: 1500,
                easing: 'linear',
                queue: false
            }
        });

        return false;

    });

    $("#navigation li a").click(function(e) {
        e.preventDefault();

        var targetElement = $(this).attr("href");
        var targetPosition = $(targetElement).offset().top;
        $("html, body").animate({ scrollTop: targetPosition - 70 }, "slow")
    });

    const nav = $("#navigation");
    const about = $("#about");
    const skills = $("#skills");
    const stats = $("#stats");
    const portfolio = $("#portfolio");
    const contact = $("#contact");

    const navTop = nav.offset().top;
    const aboutTop = about.offset().top;
    const skillsTop = skills.offset().top;
    const statsTop = stats.offset().top;
    const portfolioTop = portfolio.offset().top;
    const contactTop = contact.offset().top;
    
    $(window).on("scroll", stickyNavigation);

    function stickyNavigation() {
        
        var body = $("body");

        if($(window).scrollTop() >= navTop) {
            body.css("padding-top", nav.outerHeight() + "px");
            body.addClass("fixedNav");
        }
        else {
            body.css("padding-top", 0);
            body.removeClass("fixedNav");
        }
        var county = 0;
        if(($(window).scrollTop() + 80)>= aboutTop && ($(window).scrollTop() <= skillsTop - 200)) {
            $( ".nav-link" ).removeClass("hoverEffect");
            $( ".aboutHover" ).addClass("hoverEffect");
            
        }
        else if(($(window).scrollTop() + 150)>= skillsTop && ($(window).scrollTop() <= statsTop - 100)) {
            $( ".nav-link" ).removeClass("hoverEffect");
            $( ".skillsHover" ).addClass("hoverEffect");
            
        }
        else if(($(window).scrollTop() + 100)>= statsTop && ($(window).scrollTop() <= portfolioTop - 100)) {
            $( ".nav-link" ).removeClass("hoverEffect");
            $( ".statsHover" ).addClass("hoverEffect");
            
        }
        else if(($(window).scrollTop() + 100)>= portfolioTop && ($(window).scrollTop() <= contactTop - $(window).height() + 150)) {
            $( ".nav-link" ).removeClass("hoverEffect");
            $( ".portfolioHover" ).addClass("hoverEffect");
            
        }
        else if(($(window).scrollTop()>= contactTop - 500)) {
            $( ".nav-link" ).removeClass("hoverEffect");
            $( ".contactHover" ).addClass("hoverEffect");
            
        }
        else {
            $( ".nav-link" ).removeClass("hoverEffect");
        }



    }

});
