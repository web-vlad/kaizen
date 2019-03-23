
$(document).ready(function() {
    // ANIMATION
    new WOW().init();

    // Menu Scroll
    var nav_container = $(".header");
    var nav = $(".header-second");

    var top_spacing = 0;
    var waypoint_offset = 0;

    nav_container.waypoint({
        handler: function(event, direction) {

            if (direction == 'down') {

                nav_container.css({ 'height':nav.outerHeight() });
                nav.stop().addClass("sticky").css("top",-nav.outerHeight()).animate({"top":top_spacing});

            } else {

                nav_container.css({ 'height':'auto' });
                nav.stop().removeClass("sticky").css("top",nav.outerHeight()+waypoint_offset).animate({"top":""});

            }

        },
        offset: function() {
            return -nav.outerHeight()-waypoint_offset;
        }
    });

// SHOW MAIN MENU
	$('.button-menu').click(function(e) {
			$(this).toggleClass('active');
			$('.box-main-menu').toggleClass('open');
			e.stopPropagation();
			e.preventDefault();
		});
		
	
		$('.close-menu').click(function() {
			$('.button-menu').removeClass('active');
			$('.box-main-menu').removeClass('open');
		});
	
		$('body').click(function(e){
			e.stopPropagation();
			$('.button-menu').removeClass('active');
			//$('.box-main-menu').removeClass('open');
		});


    // REVIEWS
    $('.slider-top').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        //fade: true,
        //variableWidth: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 2000,
        //arrows: false,
        dots: false,
        //centerMode: true,
        //centerPadding: '4px',
        /*appendArrows: $('.b-nav'),
        prevArrow: '<button id="prev" type="button" class="slick-arrow--prev"></button>',
        nextArrow: '<button id="next" type="button" class="slick-arrow--next"></button>',*/
        /*responsive: [
            {
             breakpoint: 640,
             settings: {
             slidesToShow: 2
             //variableWidth: false,
             }
             },
            {
                breakpoint: 426,
                settings: {
                    slidesToShow: 1,
                    variableWidth: false
                }
            }
        ]*/
    });

});





