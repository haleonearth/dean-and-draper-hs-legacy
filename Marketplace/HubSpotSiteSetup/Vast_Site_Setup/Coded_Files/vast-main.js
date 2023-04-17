function hsOnReadyLoadVastMainJS() {  

    // Global Variables
    var i; 
    var customMenuPrimary = document.querySelector(".custom-menu-primary"); 
    var hsMenuWrapper = document.querySelector(".custom-menu-primary .hs-menu-wrapper"); 
    var menuChildren = document.querySelectorAll(".custom-menu-primary .flyouts .hs-item-has-children > a");
    var menuChildrenWrappers = document.querySelectorAll(".custom-menu-primary .hs-menu-children-wrapper"); 
    var headerContainerWrapper = document.querySelector(".header-container-wrapper"); 
    var bodyContainerWrapper = document.querySelector(".body-container-wrapper");
    var footerContainerWrapper = document.querySelector(".footer-container-wrapper");
    var bannerImage = document.querySelector(".background-image img");
    var offerBannerImage = document.querySelector(".offer-image img"); 
  
    // Global Functions 
    function slideUp(target, duration) {
        target.style.transitionProperty = "height, margin, padding";
        target.style.transitionDuration = duration + "ms";
        target.style.boxSizing = "border-box";
        target.style.height = target.offsetHeight + "px";
        target.offsetHeight;
        target.style.overflow = "hidden";
        target.style.height = 0;
        target.style.paddingTop = 0;
        target.style.paddingBottom = 0;
        target.style.marginTop = 0;
        target.style.marginBottom = 0;
        window.setTimeout(function(){ 
          target.style.display = "none";
          target.style.removeProperty("height");
          target.style.removeProperty("padding-top");
          target.style.removeProperty("padding-bottom");
          target.style.removeProperty("margin-top");
          target.style.removeProperty("margin-bottom");
          target.style.removeProperty("overflow");
          target.style.removeProperty("transition-duration");
          target.style.removeProperty("transition-property");
        }, duration);
      };
    function slideDown(target, duration) {
      target.style.removeProperty("display"); 
      var display = window.getComputedStyle(target).display;
      if (display === "none") {
        display = "block";
      }
      target.style.display = display;
      var height = target.offsetHeight;
      target.style.overflow = "hidden";
      target.style.height = 0;
      target.style.paddingTop = 0;
      target.style.paddingBottom = 0;
      target.style.marginTop = 0;
      target.style.marginBottom = 0;
      target.offsetHeight;
      target.style.transitionProperty = "height, margin, padding";
      target.style.transitionDuration = duration + "ms";
      target.style.height = height + "px";
      target.style.removeProperty("padding-top");
      target.style.removeProperty("padding-bottom");
      target.style.removeProperty("margin-top");
      target.style.removeProperty("margin-bottom");
      window.setTimeout(function(){ 
        target.style.removeProperty("height");
        target.style.removeProperty("overflow");
        target.style.removeProperty("transition-duration");
        target.style.removeProperty("transition-property");
      }, duration);
    }; 
    function slideToggle(target, duration) {
      if (window.getComputedStyle(target).display === "none") {
        return slideDown(target, duration);
      } else {
        return slideUp(target, duration);
      }
    };
  
    // Mobile Navigation 
    if (customMenuPrimary !== null) {
        customMenuPrimary.classList.add("js-enabled"); 
        hsMenuWrapper.insertAdjacentHTML('beforebegin', '<div class="mobile-trigger cta_border_button">MENU</div>');
        for (i=0; i < menuChildren.length; i++) {
          var hasChildren = menuChildren[i].parentElement.querySelector(".hs-menu-children-wrapper");
          if (hasChildren !== null) {
            menuChildren[i].insertAdjacentHTML('afterend', ' <div class="child-trigger"><i></i></div>');
          }
        }
        
        // Mobile Trigger
        var mobileTrigger = document.querySelector(".custom-menu-primary .mobile-trigger");
        var childTriggers = document.querySelectorAll(".custom-menu-primary .child-trigger"); 
        mobileTrigger.addEventListener("click", function(e){
          document.body.classList.toggle("mobile-open");
          slideToggle(hsMenuWrapper, 250);
          for (i = 0; i < childTriggers.length; i++) {
            childTriggers[i].classList.remove("child-open"); 
          }
          for (i = 0; i < menuChildrenWrappers.length; i++) {
            slideUp(menuChildrenWrappers[i], 250);
          }
          return false;
        }); 
      
        // Child Triggers
        customMenuPrimary.addEventListener("click", function(e){
          var childTriggerTarget = e.target; 
          if (childTriggerTarget.classList.contains("child-trigger") == false) return;
          var childMenuTarget = childTriggerTarget.nextElementSibling; 
          var parentMenuTarget = childTriggerTarget.parentElement.parentElement;
          var siblingMenus = parentMenuTarget.querySelectorAll(".hs-menu-children-wrapper"); 
          for (i=0; i < siblingMenus.length; i++) {
            if (siblingMenus[i] != childMenuTarget) {
              slideUp(siblingMenus[i]);
              siblingMenus[i].previousElementSibling.classList.remove("child-open"); 
            }
          }
          var childMenus = childTriggerTarget.nextElementSibling.querySelectorAll(".hs-menu-children-wrapper");
          for (i=0; i < childMenus.length; i++) {
            slideUp(childMenus[i]);
            childMenus[i].previousElementSibling.classList.remove("child-open"); 
          }
          slideToggle(childTriggerTarget.nextElementSibling, 250);  
          childTriggerTarget.classList.toggle("child-open");
          return false; 
        });
    }
  
    // Set Banner Image on Homepage 
    if (bannerImage !== null) {
      var bannerSRC = bannerImage.getAttribute("src");
      document.getElementById("banner-background-image").style.backgroundImage = 'url(' + bannerSRC + ')';
    }
    
    // Set Offer Image on Homepage 
    if (offerBannerImage !== null) {
      var offerBannerSRC = offerBannerImage.getAttribute("src"); 
      document.getElementById("offer-background-image").style.backgroundImage = 'url(' + offerBannerSRC + ')';
    }
      
    // Small Header on Page Scroll
    window.addEventListener('scroll', function() {
      var bodyContainer = document.querySelector(".body-container"); 
      var windowScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      var secondRowOffset = bodyContainer.offsetTop;
      if (windowScrollTop > secondRowOffset){
        document.body.classList.add("small-header");
    	}
    	else {
    		document.body.classList.remove("small-header");
    	}
    });
    
    // Body Padding Based From Header Height and Sticky Footer
    function updateheaderHeight(){
        var pageWidth = window.innerWidth;
        var pageHeight = window.innerHeight; 
        var headerHeight = headerContainerWrapper.offsetHeight;
        var footerHeight = footerContainerWrapper.offsetHeight;
        var bodyHeight = pageHeight - headerHeight - footerHeight;
        var bodyWithPaddingHeight = pageHeight - footerHeight; 
        if (pageWidth > 767) {
          bodyContainerWrapper.style.paddingTop = headerHeight + "px";
          bodyContainerWrapper.style.minHeight = bodyWithPaddingHeight + "px";
        }
        else {
          bodyContainerWrapper.style.paddingTop = "0px"; 
          bodyContainerWrapper.style.minHeight = bodyHeight + "px";
        }
    }
    window.addEventListener('load', updateheaderHeight);
    window.addEventListener('resize', updateheaderHeight);
    
} 

if (document.readyState === "complete" ||
    (document.readyState !== "loading" && !document.documentElement.doScroll)
   ) {
  hsOnReadyLoadVastMainJS();
} else {
  document.addEventListener("DOMContentLoaded", hsOnReadyLoadVastMainJS);
}
 

