$('.carousel').carousel({
    interval: 3000
})

var temp = 800;

$('.social-buttom').each(function (i) {
    $(this).delay(temp * i).fadeIn();
});


function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

function Utils() {

}

Utils.prototype = {
    constructor: Utils,
    isElementInView: function (element, fullyInView) {
        var pageTop = $(window).scrollTop();
        var pageBottom = pageTop + $(window).height();
        var elementTop = $(element).position().top;
        var elementBottom = elementTop + $(element).height();

        if (fullyInView === true) {
            return ((pageTop < elementTop) && (pageBottom > elementBottom));
        } else {
            return ((elementTop <= pageBottom) && (elementBottom >= pageTop));
        }
    }
};

var Utils = new Utils();


$(window).scroll(function () {
    if (Utils.isElementInView($('#profile-1'), false)) {
        $('#profile-1').addClass('animate__animated animate__fadeInTopLeft animate__fast');
    }

    if (Utils.isElementInView($('#profile-2'), false)) {
        $('#profile-2').addClass('animate__animated animate__fadeInUp animate__fast');
    }

    if (Utils.isElementInView($('#profile-3'), false)) {
        $('#profile-3').addClass('animate__animated animate__fadeInTopRight animate__fast');
    }

    if (Utils.isElementInView($('#description-1'), false)) {
        $('#description-1').addClass('animate__animated animate__fadeInDown animate__delay-1s');
    }

    if (Utils.isElementInView($('#title-2'), false)) {
        $('#title-2').addClass('animate__animated animate__fadeIn');
    }
    if (Utils.isElementInView($('#wedo-section'), false)) {
        $('#wedo-section').addClass('animate__animated animate__fadeIn');
    }
    if (Utils.isElementInView($('#info-1'), false)) {
        $('#info-1').addClass('animate__animated animate__fadeInLeft');
    }
    if (Utils.isElementInView($('#info-2'), false)) {
        $('#info-2').addClass('animate__animated animate__fadeInRight');
    }
    if (Utils.isElementInView($('#info-3'), false)) {
        $('#info-3').addClass('animate__animated animate__fadeInLeft');
    }
    if (Utils.isElementInView($('#info-4'), false)) {
        $('#info-4').addClass('animate__animated animate__fadeInRight');
    }

    if (Utils.isElementInView($('#product-1'), false)) {
        $('#product-1').addClass('animate__animated animate__fadeInBottomLeft animate__fast');
    }
    if (Utils.isElementInView($('#product-2'), false)) {
        $('#product-2').addClass('animate__animated animate__fadeInDown');
    }
    if (Utils.isElementInView($('#product-3'), false)) {
        $('#product-3').addClass('animate__animated animate__fadeInBottomRight animate__fast');
    }
});

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        $('#toTop').fadeIn();
    } else {
        $('#toTop').fadeOut();
    }
}


function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}