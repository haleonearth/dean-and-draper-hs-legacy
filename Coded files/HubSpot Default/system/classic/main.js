(function($) {

    var onReady = function() {
        if ($.fn.fancybox) {
            $('.hs-gallery-thumbnails a').fancybox();
        }
    };

    $(document).ready(onReady);
})(hsjQuery);