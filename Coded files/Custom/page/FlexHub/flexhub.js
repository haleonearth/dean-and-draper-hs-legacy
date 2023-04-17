// FlexHUB JS
// Begin Bound - Dec 2015

//FlexHUB Mobile Navigation 
$(function() {
    $('.custom-menu-primary').addClass('js-enabled');
    $('.custom-menu-primary .hs-menu-flow-horizontal').before('<a class="mobile-trigger"><span></span><i></i></a>');
    $('.custom-menu-primary .flyouts .hs-item-has-children > a').after('<a class="child-trigger"><span></span></a>');
    $('a.mobile-trigger').click(function() {
        $(this).next('.custom-menu-primary .hs-menu-flow-horizontal').slideToggle(250);
        $('body').toggleClass('mobile-open');
        $('a.child-trigger').removeClass('child-open');
        $('.hs-menu-children-wrapper').slideUp(250);
        return false;
     });

    $('a.child-trigger').click(function() {
        $(this).parent().siblings('.hs-item-has-children').find('a.child-trigger').removeClass('child-open');
        $(this).parent().siblings('.hs-item-has-children').find('.hs-menu-children-wrapper').slideUp(250);
        $(this).next('.hs-menu-children-wrapper').slideToggle(250);
        $(this).next('.hs-menu-children-wrapper').children('.hs-item-has-children').find('.hs-menu-children-wrapper').slideUp(250);
        $(this).next('.hs-menu-children-wrapper').children('.hs-item-has-children').find('a.child-trigger').removeClass('child-open');
        $(this).toggleClass('child-open');
        return false;
    });

});

$(function() {
    //FlexBLOG Tabber Module
    
    // Hide all panes initially except for the first 'active' one
    $(".tab-pane").not(".active").hide();
    
    // Loop through all the tabber panes
    $('.tabber-content .tab-pane').each(function(i, el){
       
       // Set the ID
       $(el).attr("id", "tab-" + i);
       
    });
    
    // Loop through all the tabber anchors
    $(".tabber-tabs a").each(function(i, el){
        
        // Set HREF Using the Index
        $(el).attr("href", "#tab-" + i);
        
        // Variable for the Pane ID based on the HREF
        var ID = $(el).attr("href");
    
        // Click Function
        $(this).click(function(e){
    		
            // Prevent default functionality of the anchor
    		e.preventDefault();
    
            // If the parent LI does not have the active class
    		if(!$(this).parent().hasClass("active")){
                
                // Give the parent LI the active state styles and hide all other panes
    			$(this).parent().addClass("active").siblings().removeClass("active");
                
                // Fade in the corresponding pane and hide all other panes
    			$(ID).fadeIn().siblings().hide();
    		}
    	});
    });
});
$(function() {
    $('.blog-listing-cont .post-item')
        .eq(0).addClass('firstpost').end()
        .eq(1).addClass('secondpost').end()
        .eq(2).addClass('thirdpost').end();
    //$('.blog-listing-cont .post-item.firstpost .post-header').append($( ".blog-listing-cont .post-item.firstpost .post-body h2" ));
});

jQuery(document).ready(function($){
    var is_firefox = navigator.userAgent.indexOf('Firefox') > -1;

	//Open Blogside bar
	$('#cd-team').find('ul a').on('click', function(event){
		event.preventDefault();
		var selected_member = $(this).data('type');
		$('.cd-member-bio.'+selected_member+'').addClass('slide-in');
		$('.cd-member-bio-close').addClass('is-visible');

		// firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
		if( is_firefox ) {
			$('main').addClass('slide-out').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				$('body').addClass('overflow-hidden');
			});
		} else {
			$('main').addClass('slide-out');
			$('body').addClass('overflow-hidden');
		}

	});

	//close Blog sidebar
	$(document).on('click', '.cd-overlay, .cd-member-bio-close', function(event){
		event.preventDefault();
		$('.cd-member-bio').removeClass('slide-in');
		$('.cd-member-bio-close').removeClass('is-visible');

		if( is_firefox ) {
			$('main').removeClass('slide-out').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				$('body').removeClass('overflow-hidden');
			});
		} else {
			$('main').removeClass('slide-out');
			$('body').removeClass('overflow-hidden');
		}
	});
});