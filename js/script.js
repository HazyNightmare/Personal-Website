//IIFE to wrap the entire script and keep all vars local
var PAGECONTROLLER = (function($, window, document) {
	"use strict";

	var object = {};

	object.init = function() {
		randomBackground();
		scrollToSection();
	};


	//private functions
	function randomBackground() {
		//Variable declarations
		var header = null,
			backgrounds = [],
			min = null,
			max = null,
			chosen = null;

		header = $('.header');
		//create an array that will hold the names of the backgrounds to choose from
		backgrounds = ['rainy-floor', 'seattle', 'space-jupiter', 'office', 'laptop-notepad'];

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
		var target = null;
		$('a[href*=#]:not([href=#])').click(function() {
			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

				target = $(this.hash);
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

	return object;
}(window.jQuery, window, document));

//Page initialization
PAGECONTROLLER.init();
