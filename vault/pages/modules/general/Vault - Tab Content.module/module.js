/**
 * This JavaScript was automatically generated on 2021-03-31 from a source file.
 * Editing this file directly isn't recommended; if you want to modify the functionality of this module,
 * make a clone, contact the original developer for support, or make an external js file and attach it to the
 * page or module.
 */

$(".vault-tabs__tab").on("click",function(){var t=$(this).attr("data-tab");$(this).siblings().removeClass("active").attr("aria-selected",!1),$(t).siblings().removeClass("active"),$(this).addClass("active").attr("aria-selected",!0),$(t).addClass("active")}),function(){var j=this.jQuery||window.jQuery,M=j(window);j.fn.stick_in_parent=function(t){var y,w,i,s,x,o,C,$,I,z,A;for(null==t&&(t={}),A=t.sticky_class,x=t.inner_scrolling,z=t.recalc_every,I=t.parent,$=t.offset_top,C=t.spacer,w=t.bottoming,null==$&&($=0),null==I&&(I=void 0),null==x&&(x=!0),null==A&&(A="is_stuck"),y=j(document),null==w&&(w=!0),i=function(e,n,r,a,c,l,d,f){var u,t,p,h,g,k,v,_,i,m,b,o;if(!e.data("sticky_kit")){if(e.data("sticky_kit",!0),g=y.height(),v=e.parent(),null!=I&&(v=v.closest(I)),!v.length)throw"failed to find stick parent";if(u=p=!1,(b=null!=C?C&&e.closest(C):j("<div />"))&&b.css("position",e.css("position")),(_=function(){var t,i,s;if(!f&&(g=y.height(),t=parseInt(v.css("border-top-width"),10),i=parseInt(v.css("padding-top"),10),n=parseInt(v.css("padding-bottom"),10),r=v.offset().top+t+i,a=v.height(),p&&(u=p=!1,null==C&&(e.insertAfter(b),b.detach()),e.css({position:"",top:"",width:"",bottom:""}).removeClass(A),s=!0),c=e.offset().top-(parseInt(e.css("margin-top"),10)||0)-$,l=e.outerHeight(!0),d=e.css("float"),b&&b.css({width:e.outerWidth(!0),height:l,display:e.css("display"),"vertical-align":e.css("vertical-align"),float:d}),s))return o()})(),l!==a)return h=void 0,k=$,m=z,o=function(){var t,i,s,o;if(!f&&(s=!1,null!=m&&(--m<=0&&(m=z,_(),s=!0)),s||y.height()===g||_(),s=M.scrollTop(),null!=h&&(i=s-h),h=s,p?(w&&(o=a+r<s+l+k,u&&!o&&(u=!1,e.css({position:"fixed",bottom:"",top:k}).trigger("sticky_kit:unbottom"))),s<c&&(p=!1,k=$,null==C&&("left"!==d&&"right"!==d||e.insertAfter(b),b.detach()),t={position:"",width:"",top:""},e.css(t).removeClass(A).trigger("sticky_kit:unstick")),x&&((t=M.height())<l+$&&!u&&(k-=i,k=Math.max(t-l,k),k=Math.min($,k),p&&e.css({top:k+"px"})))):c<s&&(p=!0,(t={position:"fixed",top:k}).width="border-box"===e.css("box-sizing")?e.outerWidth()+"px":e.width()+"px",e.css(t).addClass(A),null==C&&(e.after(b),"left"!==d&&"right"!==d||b.append(e)),e.trigger("sticky_kit:stick")),p&&w&&(null==o&&(o=a+r<s+l+k),!u&&o)))return u=!0,"static"===v.css("position")&&v.css({position:"relative"}),e.css({position:"absolute",bottom:n,top:"auto"}).trigger("sticky_kit:bottom")},i=function(){return _(),o()},t=function(){if(f=!0,M.off("touchmove",o),M.off("scroll",o),M.off("resize",i),j(document.body).off("sticky_kit:recalc",i),e.off("sticky_kit:detach",t),e.removeData("sticky_kit"),e.css({position:"",bottom:"",top:"",width:""}),v.position("position",""),p)return null==C&&("left"!==d&&"right"!==d||e.insertAfter(b),b.remove()),e.removeClass(A)},M.on("touchmove",o),M.on("scroll",o),M.on("resize",i),j(document.body).on("sticky_kit:recalc",i),e.on("sticky_kit:detach",t),setTimeout(o,0)}},s=0,o=this.length;s<o;s++)t=this[s],i(j(t));return this}}.call(this),$(".vault-tabs__tabs").stick_in_parent({offset_top:90});