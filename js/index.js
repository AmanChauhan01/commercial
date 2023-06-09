function blink_text() {
    $('.wrap3 .col-md-7 ul li .drop ol li span').fadeOut(500);
    $('.wrap3 .col-md-7 ul li .drop ol li span').fadeIn(500);
}
setInterval(blink_text, 1000);