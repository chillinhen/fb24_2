jQuery(document).ready(function ($) {
    /*** responsive***/


    function resizeWindow(e) {
        var newWindowWidth = $(window).width();

        // If width width is below 600px, switch to the mobile stylesheet
        if (newWindowWidth < 576) {
            $('#top-nav').removeClass('fixedsticky');
        }
        if (newWindowWidth > 426) {

        }

    }
    $('.carousel').carousel();
    stickybits('.fixedsticky', {useStickyClasses: true});
    $(window).bind("resize", resizeWindow);
    
    $('.dropdown-header').on("click", function (e) {
        $(this).next('ul').toggleClass('show');
        e.stopPropagation();
        e.preventDefault();
    });

});
