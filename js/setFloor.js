(function($) {
    $('.floor_01').on('click', function(event) {
        $('.active-floor-btn').removeClass('active-floor-btn');
        $(this).addClass('active-floor-btn');


        $('.map_floor_02').removeClass('active-map-floor');
        $('.map_floor_01').addClass('active-map-floor');
    });
    $('.floor_02').on('click', function(event) {
        $('.active-floor-btn').removeClass('active-floor-btn');
        $(this).addClass('active-floor-btn');

        $('.map_floor_01').removeClass('active-map-floor');
        $('.map_floor_02').addClass('active-map-floor');
    });
})(jQuery);