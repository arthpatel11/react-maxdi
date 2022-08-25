(function ($) {
    "use strict";

    // WOW active
    new WOW().init();

    // Sticky Header start here
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 100) {
            $("#header-sticky").removeClass("sticky");
        } else {
            $("#header-sticky").addClass("sticky");
        }
    });
    // Sticky Header end here

    // Portfolio Start Here
    $(document).ready(function () {
        var $grid = $(".grid").isotope({
            itemSelector: ".grid-item",
            percentPosition: false,
            masonry: {
                columnWidth: ".grid-item"
            }
        });


        if ($('.grid').length) {
            var $elements = $(".grid"),
                $filters = $('.portfolio__menu button');
            $elements.isotope();

            $filters.on('click', function () {
                $filters.removeClass('active');
                $(this).addClass('active');
                var selector = $(this).data('filter');
                $(".grid").isotope({
                    filter: selector,
                    transitionDuration: '.5s',
                });
            });
        };

        $grid.imagesLoaded().progress(function () {
            $grid.isotope('layout');
        });
    });
    // Portfolio End Here

    // MagnificPopup Video View
    $('.popup-video').magnificPopup({
        type: 'iframe'
    });



    // FAQ Start here
    $('.faqhead').on('click', function (e) {
        var element = $(this).parent('.faqdiv');
        if (element.hasClass('open')) {
            element.removeClass('open');
            element.find('.faqbody').removeClass('open');
            element.find('.faqbody').slideUp(300, "swing");
        } else {
            // element.addClass('open');
            element.find('.faqdiv').addClass('open');
            element.children('.faqbody').slideDown(300, "swing");
            element.siblings('.faqdiv').children('.faqbody').slideUp(300, "swing");
            element.siblings('.faqdiv').removeClass('open');
        }
    });

    $('.faqdiv').on('click', function (e) {

        var $this = $(this);
        if (!$this.hasClass('open')) {
            $this.addClass('open');
        }
    });
    // FAQ End here

})(jQuery);