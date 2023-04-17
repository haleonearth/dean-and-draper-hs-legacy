/**
 * This JavaScript was automatically generated on 2021-03-31 from a source file.
 * Editing this file directly isn't recommended; if you want to modify the functionality of this module,
 * make a clone, contact the original developer for support, or make an external js file and attach it to the
 * page or module.
 */

!function(f){f.fn.transformHeroes=function(){var t=this.width(),s=this.height(),a=t/2,n=s/2;return this.on({mousemove:function(t){var s=f(this).offset(),e=t.pageX-s.left,o=t.pageY-s.top,i=a-e,r=n-o;f(this).css("transform","perspective(500px) rotateX("+r/20+"deg) rotateY("+-i/20+"deg)"),f(this).removeClass("is-out")},mouseleave:function(){f(this).addClass("is-out")}}),this}}(jQuery),$(".vault-blog-posts__post-details").transformHeroes();