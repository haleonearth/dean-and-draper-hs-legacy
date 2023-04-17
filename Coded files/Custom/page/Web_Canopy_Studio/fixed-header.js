
$(window).scroll(function() {
    if (!$(window).scrollTop() == 0) {
        $(document.getElementById('elevate-header')).addClass ('elevate-header-home');
        $('#header-logo img')
            .attr('src',"//cdn2.hubspot.net/hubfs/395201/social-suggested-images/Web_Canopy_Logo-1.png");
        $('#header-logo img')
            .attr('srcset',"");
    }
    else {
        $(document.getElementById('elevate-header')).removeClass ('elevate-header-home');
        $('#header-logo img') 
            .attr('src',"//cdn2.hubspot.net/hubfs/395201/Web_Canopy_Logo_White.png");
        $('#header-logo img')
            .attr('srcset',"");
    }
});