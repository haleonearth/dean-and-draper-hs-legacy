$(function() {

    /** 
     * Mobile Nav
     *
     * Hubspot Standard Toggle Menu
     */

    $('.custom-menu-primary').addClass('js-enabled');
    
    /* Mobile button with three lines icon */
        $('.custom-menu-primary .hs-menu-wrapper').before('<div class="mobile-trigger"><i></i></div>');
        
    /* Uncomment for mobile button that says 'MENU' 
        $('.custom-menu-primary .hs-menu-wrapper').before('<div class="mobile-trigger">MENU</div>');
    */
    
    $('.custom-menu-primary .flyouts .hs-item-has-children > a').after(' <div class="child-trigger"><i></i></div>');
    $('.mobile-trigger').click(function() {
        $(this).next('.custom-menu-primary .hs-menu-wrapper').slideToggle(250);
        $('body').toggleClass('mobile-open');
        $('.child-trigger').removeClass('child-open');
        $('.hs-menu-children-wrapper').slideUp(250);
        return false;
     });

    $('.child-trigger').click(function() {
        $(this).parent().siblings('.hs-item-has-children').find('.child-trigger').removeClass('child-open');
        $(this).parent().siblings('.hs-item-has-children').find('.hs-menu-children-wrapper').slideUp(250);
        $(this).next('.hs-menu-children-wrapper').slideToggle(250);
        $(this).next('.hs-menu-children-wrapper').children('.hs-item-has-children').find('.hs-menu-children-wrapper').slideUp(250);
        $(this).next('.hs-menu-children-wrapper').children('.hs-item-has-children').find('.child-trigger').removeClass('child-open');
        $(this).toggleClass('child-open');
        return false;
    });
    
    
    /** 
     * Set Banner Image on Homepage
     */
    
    // Grab the SRC of the Background Image module uploaded image
    var bannerSRC = $(".background-image").find("img").attr("src");
    
    // Apply the src as the background image for the banner area
    $(".banner-background").css('background-image', 'url(' + bannerSRC + ')');
    
    
    
    /** 
     * Set Services Image on Homepage
     */
    
    // Grab the SRC of the Background Image module uploaded image
    var servicesBannerSRC = $(".services-image").find("img").attr("src");
    
    // Apply the src as the background image for the banner area
    $(".home-service-background").css('background-image', 'url(' + servicesBannerSRC + ')');
    
    
    
        /** 
     * Well Module Close Button
     */
     
    $("#well .close").click(function(){
        $(this).parent("#well").fadeOut();
    }); 
    
    
    
    /** 
     * Back to Top
     */
    
    var $backToTop = $(".back-to-top");
    $backToTop.hide();
    
    $(window).scroll(function() {
        if ($(this).scrollTop()) {
            $backToTop.fadeIn();
        } else {
            $backToTop.fadeOut();
        }
    });
    
    $backToTop.find("a").click(function(e) {
        e.preventDefault();
        $("html, body").animate({scrollTop: 0}, 500);
    });
    
    
    
    /** 
     * Tabber
     */
    
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
    
    
    
    /** 
     * Prepend HOME link to breadcrumb
     */
     
    $(".title-background .hs-breadcrumb-menu-item:first-child").before('<li class="hs-breadcrumb-menu-item"><a href="/">Home</a><span class="hs-breadcrumb-menu-divider"></span></li>');
    
    
    

});  /* End of Document Ready */