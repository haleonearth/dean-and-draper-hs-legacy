
$(function () {
  "use strict";
  var init = [
    function () {      
      var thumbnailLinks = $('.vault-blog-posts .vault-blog-posts__post').length,
      thumbnailShow = 6;
      $('.vault-blog-posts .vault-blog-posts__post:lt('+thumbnailShow+')').show();
      $('.vault-blog-posts__posts-wrapper__navigation--load').on('click', function () {
          thumbnailShow = (thumbnailShow+4 <= thumbnailLinks) ? thumbnailShow+4 : thumbnailLinks;
          $('.vault-blog-posts .vault-blog-posts__post:lt('+thumbnailShow+')').show();
          if( thumbnailShow >= thumbnailLinks ) {
              $('.vault-blog-posts__posts-wrapper__navigation--load').hide();
          };
      });
    },
    function () {
      //Make your content a heroe
      $.fn.transformHeroes = function () {
        //Variables
        var perspective = "500px",
          delta = 20,
          width = this.width(),
          height = this.height(),
          midWidth = width / 2,
          midHeight = height / 2;
        //Events
        this.on({
          mousemove: function (e) {
            var pos = $(this).offset(),
              cursPosX = e.pageX - pos.left,
              cursPosY = e.pageY - pos.top,
              cursCenterX = midWidth - cursPosX,
              cursCenterY = midHeight - cursPosY;
    
            $(this).css(
              "transform",
              "perspective(" +
                perspective +
                ") rotateX(" +
                cursCenterY / delta +
                "deg) rotateY(" +
                -(cursCenterX / delta) +
                "deg)"
            );
            $(this).removeClass("is-out");
          },
          mouseleave: function () {
            $(this).addClass("is-out");
          }
        });
        //Return
        return this;
      };
      //Set plugin on cards
      $(".vault-blog-posts__post-details").transformHeroes();
    },
    function () {
      // Blog Search
      $("#blog-search").on("keyup", function() {
          var value = $(this).val().toLowerCase();
          $(".vault-blog-posts .vault-blog-posts__post").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
          });
      });
    },
    function () {
      // Select Nav
      var selectNav = $('.select-nav').filter(function () {
        return $(this).closest('[data-is-vue="true"]').length < 1;
      });

      selectNav.find('.select-nav__label').on('click', function (event) {
        $(this).closest(selectNav).toggleClass('select-nav--active');
      });

      $(window).on('click', function (event) {
        selectNav.not(selectNav.has(event.target)).removeClass('select-nav--active');
      });

      $(window).on('keyup', function (event) {
        if (event.which === 27) selectNav.removeClass('select-nav--active');
      });
    }
  ];

  $.each(init, function (index, initFunction) {
    initFunction();
  });
});
