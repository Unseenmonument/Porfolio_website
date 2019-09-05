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

	// mixitup code
	var mixer = mixitup('.container');
//	var mixer = mixitup(containerEl);
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

	// end of mixitup code

	//
	//

	// modal code
	$('.outer-outer').hide();
	$('.text_btm').click(function() {
		var id = $(this).parent().attr('id');
		var id2 = "#modal" + id;
		$(id2).fadeIn('slow');
//		console.log(id2);
	});
	$('.outer').click(function() {
		$('.outer-outer').fadeOut('slow');
	});
	// end of modal code

	$('.projects').hide();
	//$('.about_pics').hide();


	$('#a1').hover(function() {
		$('.about_pics').delay(100).fadeIn(1000);
//		$('.about1').fadeIn();
//		$('.about2').fadeIn();
//		$('.about3').fadeIn();
//		$('.about4').fadeIn();
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
	// Social Media Icons
	//

	$('.social-hover').hide();

	$('.social').mouseenter(function() {
		$('.social-hover').fadeIn();
		$('.social').css({"width": "95px", "height": "95px", "transition": "0.3s"});
		$('.social-hover').css({"width": "95px", "height": "95px", "transform": "translateY(0)", "transition": "0.3s"});
	});

	$('.social').mouseleave(function() {
		$('.social').css({"width": "100px", "height": "100px", "transition": "0.3s"});
		$('.social-hover').css({"width": "100px", "height": "100px", "transform": "translateY(-100%)", "transition": "0.3s"});
		$('.social-hover').fadeOut();
	});
	
	/* $('.gitbox1').hide();
	$('.gitbox2').click(function() {
		$('.gitbox1').toggle('scale');
		$('.gitbox3').toggle('scale');
    }); */		

//	$('.gitbox2').click(function() {
//		$('.gitbox1').toggleClass('animate');
//    });

});