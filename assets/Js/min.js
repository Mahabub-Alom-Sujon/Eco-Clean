$(document).ready(function () {
    //preloder
    jQuery(window).load(function() {
		$(".preloder").delay(350).fadeOut('slow');
	});
    //navber sticky
    $(window).on('scroll',function() {    
        var scroll = $(window).scrollTop();
        if (scroll < 245) {
         $(".header-wrap").removeClass("sticky");
        }else{
         $(".header-wrap").addClass("sticky");
        }
    });
    $('.toggle-icon').click(function () {
        $('.navbar').addClass('show')
        $('.toggle-icon').css('visibility', 'hidden')
    });   
    $('.close-toggle').click(function () {
        $('.navbar').removeClass('show')
        $('.toggle-icon').css('visibility', 'visible')
    });
    // sub menu
    $("nav ul li span").click(function () {
        $(this).next('ul.submenu').slideToggle(400);
        $(this).toggleClass("sub-drop");
    });
    
    //top-banner
    $(".owl-carousel").owlCarousel({
        loop: true,
        items: 1,
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplaySpeed: 1000,
        nav: true,
        navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],
        responsive:{
			0:{
                navText: false,
			},
            576: {
                
            }
		},
    });
    

});
//wow.js 
new WOW().init();
