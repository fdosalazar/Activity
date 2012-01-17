$(document).ready(function() {
    $('#wrapper-footer .button-up a').click(function(){
        $('html, body').animate({
            scrollTop:0
        }, 1000);
        return false;
    });
});

