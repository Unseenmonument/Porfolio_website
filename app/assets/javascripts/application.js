// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require jquery3
//= require jquery_ujs
//= require popper
//= require bootstrap
//= require turbolinks
//= reqire webdesign
//= require mixitup
//= require_tree .



$( document ).ready(function() {

//
// mixitup code ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//

	var mixer = mixitup('.container');
	var mixer = mixitup('.container', {
	    selectors: {
	        target: '.mix'
	    },
	    animation: {
	        duration: 300,
	        clampWidth: false,
	        clampHeight: false,
	    }
	});

//
// end of mixitup code ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//

//
// modal code :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//
	$('.outer-outer').hide();
	$('.text_btm').click(function() {
		var id = $(this).parent().attr('id');
		var id2 = "#modal" + id;
		$(id2).fadeIn('slow');
	});

	$('.outer').click(function() {
		$('.outer-outer').fadeOut('slow');
	});

//
// end of modal code ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//

	$('.projects').hide();

	$('#a1').hover(function() {
		$('.about_pics').delay(100).fadeIn(1000);
	});

	$('#a1').hover(typeWriter);
		var i = 0;
		var txt = 'ALLOW ME TO INTRODUCE MYSELF...';
		var speed = 200;

	function typeWriter() {
		if (i < txt.length) {
		    document.getElementById("intro").innerHTML += txt.charAt(i);
		    i++;
		    setTimeout(typeWriter, speed);
		};
	};

//
// Social Media Icons ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//


	$('.social').mouseenter(function() {
		var id = $(this).attr('id');
		var id1 = "#" + id;
		var id2 = "#" + id + "-basic";
		var id3 = "#" + id + "-hover";
		
		$(id1).css({"width": "96px", "height": "96px", "background-color": "green", "margin-right": "27px", "margin-left": "27px", "margin-top": "2px", "margin-bottom": "2px", "transition": "0.3s"});
		$(id2).css({"transform": "translateY(100%)", "left": "-2px", "transition": "0.3s"});		
		$(id3).css({"transform": "translateY(0)", "left": "-2px", "transition": "0.3s"});
		});

	$('.social').mouseleave(function() {
		var id = $(this).attr('id');
		var id1 = "#" + id;
		var id2 = "#" + id + "-basic";
		var id3 = "#" + id + "-hover";
		
		$(id1).css({"width": "100px", "height": "100px", "background-color": "red", "margin-right": "25px", "margin-left": "25px", "margin-top": "0px", "margin-bottom": "0px", "transition": ".3s"});
		$(id2).css({"margin-left": "auto", "margin-right": "auto", "left": "0px", "top": "0px", "transform": "translateY(0)", "transition": "0.01s"});
		$(id3).css({"margin-left": "auto", "margin-right": "auto", "left": "0px", "top": "0px", "transform": "translateY(-100%)", "transition": "0.01s"});
	});
	

});