/**
 * This JavaScript was automatically generated on 2021-03-31 from a source file.
 * Editing this file directly isn't recommended; if you want to modify the functionality of this module,
 * make a clone, contact the original developer for support, or make an external js file and attach it to the
 * page or module.
 */

var pageNav;window.pageNavItems&&0<window.pageNavItems.length&&((pageNav=document.getElementById("page-nav"))&&pageNav.classList.add("page-nav--active"),window.pageNavItems.forEach(function(a){var e=a.label,t=a.anchor,n=document.createElement("li"),p=document.createElement("a");p.href="#"+t,p.innerText=e,n.appendChild(p),pageNav&&pageNav.appendChild(n)}),$(".page-nav a").on("click",function(){var a=$(this).attr("href");$("html,body").animate({scrollTop:$(a).offset().top-150})}));