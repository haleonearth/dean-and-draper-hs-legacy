function hsOnReadyLoadTabber() { 
  // Variables   
  var i;
  var tabPane = document.getElementsByClassName("tab-pane"); 
  var tabAnchor = document.querySelectorAll(".tabber-tabs a");
  
  // Loop through all of the tab anchors 
  for (i = 0; i < tabAnchor.length; i++) {

    // Click function for when tab is clicked on
    tabAnchor[i].addEventListener("click", function(e){
      e.preventDefault(); 
      var tabIsOpen = this.parentElement.classList.contains("active");
      var tabPaneId = this.getAttribute("href").substring(1);
      var activeTabPane = document.getElementById(tabPaneId); 
      // If the tab clicked is not already opened
      if (tabIsOpen === false) { 
        for (i = 0; i < tabAnchor.length; i++) {
          // Removes active class on all tab anchors
          tabAnchor[i].parentElement.classList.remove("active");
        }
        for (i = 0; i < tabPane.length; i++) {
          // Removes active class on all tab panes
          tabPane[i].classList.remove("active");
        }
        // Adds active class to the active tab pane and anchor
        this.parentElement.classList.add("active");
        activeTabPane.classList.add("active");
      }
    });   
  }
} 

if (document.readyState === "complete" ||
    (document.readyState !== "loading" && !document.documentElement.doScroll)
   ) {
  hsOnReadyLoadTabber();
} else {
  document.addEventListener("DOMContentLoaded", hsOnReadyLoadTabber);
}