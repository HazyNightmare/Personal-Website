/*globals $:true, jquery:true*/

/*************************
******JQUERY SECTION******
*************************/

$(document).on("load", randomBackground());

function randomBackground() {
	"use strict";
	//Variable declarations
	var header,
		backgrounds,
		min,
		max,
		chosen;

	header = $('.header');
	//create an array that will hold the names of the backgrounds to choose from
	backgrounds = ['rainy-floor','seattle','snowy-forest','space-jupiter'];

	//set min to 1 and max to the length of the backgrounds array
	min = 1;
	max = backgrounds.length;

	//Random number is generated
	chosen = Math.floor(Math.random() * (max - min)) + min;

	//Background of the .header class is changed depending on the result of the var chosen
	header.css('background', 'url(imgs/' + backgrounds[chosen] + '.jpg)');
	header.css('background-repeat', 'no-repeat');
	header.css('background-position', 'center');
	header.css('background-attachment', 'scroll');
	header.css('background-size', 'cover');
}
