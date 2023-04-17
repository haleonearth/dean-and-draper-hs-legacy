function hsOnReadyLoadWell() { 
  // Variables   
  var i;
  var wellCloseIcon = document.querySelectorAll("#well .close"); 
  
  // If a well module has a close button enabled
  if (wellCloseIcon !== null) {
    // Loop through all well modules if a well module has a close button
    for (i = 0; i < wellCloseIcon.length; i++) {
      // Click function for when well module close icon is clicked on
      wellCloseIcon[i].addEventListener("click", function(e){
        e.preventDefault();
        // Hides well module 
        this.parentElement.style.display = "none"; 
      }); 
    }
  }
}
if (document.readyState === "complete" ||
    (document.readyState !== "loading" && !document.documentElement.doScroll)
   ) {
  hsOnReadyLoadWell();
} else {
  document.addEventListener("DOMContentLoaded", hsOnReadyLoadWell);
}

