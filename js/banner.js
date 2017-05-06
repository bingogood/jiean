
'use strict';
$('.banner-container').mousemove(function(e) {
	var card = $(".card");
	var ax = -($(window).innerWidth() / 2 - e.pageX) / 20;
	var ay = ($(window).innerHeight() / 2 - e.pageY) / 10;
	card.attr("style", "transform: rotateY(" + ax + "deg) rotateX(" + ay + "deg);-webkit-transform: rotateY(" + ax + "deg) rotateX(" + ay + "deg);-moz-transform: rotateY(" + ax + "deg) rotateX(" + ay + "deg)");
});
$('.banner-container').mouseout(function(){
	var card = $(".card");
	card.css( {
		"transform":"rotateY(0deg) rotateX(0deg)"
	});
})