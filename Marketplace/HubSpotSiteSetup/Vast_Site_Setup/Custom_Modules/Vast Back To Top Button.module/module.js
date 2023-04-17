function hsOnReadyLoadBackToTop() { 
  // Variables 
  var backToTop = document.querySelector(".back-to-top"); 

  // When a user scrolls on the page
  window.addEventListener('scroll', function() {
    var windowScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    // If the user is more than 50px from the top of the page
    if (windowScrollTop > 50){
      // Show the back to top button 
      backToTop.style.display = "block"; 
    }
    else {
      // Hide the back to top button
      backToTop.style.display = "none"; 
    }
  });

  // When the back to top button is clicked
  backToTop.addEventListener("click", function(e){
    e.preventDefault; 
    // Scroll to the top of the page
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
} 

if (document.readyState === "complete" ||
    (document.readyState !== "loading" && !document.documentElement.doScroll)
   ) {
  hsOnReadyLoadBackToTop();
} else {
  document.addEventListener("DOMContentLoaded", hsOnReadyLoadBackToTop);
}