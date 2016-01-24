//IIFE to wrap the entire script
(function($, window, document) {
//The $ is now locally scoped


/*************************
*****FUNCTION CALLS*******
*************************/
$(function() {
	//The DOM is ready
	randomBackground();
	scrollToSection();
});


/*************************
******JQUERY SECTION******
*************************/



/*************************
********FUNCTIONS*********
*************************/

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
	backgrounds = ['rainy-floor','seattle','space-jupiter', 'office', 'laptop-notepad'];

	//set min to 1 and max to the length of the backgrounds array
	min = 0;
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

// Scrolls to the selected menu item on the page
function scrollToSection() {
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
					}, 1000);
				return false;
			}
		}
	});
}

}(window.jQuery, window, document));
