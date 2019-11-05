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

function myfunction() {

//	
// ::::::::::::: The About Section ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//
//	$('.about_title').hide();
//	$('.about_text').hide();
//	$('.about_group').hide();


	// If DIV is in viewport, shows this section
	$.fn.isInViewport = function() {
	  var elementTop = $(this).offset().top;
	  var elementBottom = elementTop + $(this).outerHeight();

	  var viewportTop = $(window).scrollTop();
	  var viewportBottom = viewportTop + $(window).height();

	  return elementBottom > viewportTop && elementTop < viewportBottom;
	};

/*
	$(window).on('resize scroll', function() {

	    if  ( $(".about_group").isInViewport() ) {

			$('.about_group').delay(100).fadeIn(1000);
			$('.about_title').delay(2000).slideDown(1000);
			$('.about_text').delay(2000).slideDown(1000);

	    } else {

	    }
	 });
*/

//
// End of About section :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//


//
// mixitup code ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//

	var mixer = mixitup('.project_holder');
//	var mixer = mixitup(containerEl);
	var mixer = mixitup('.project_holder', {
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
 // About Bar Mobile Stuff
 //

 	$('.mobile_about_bar').hide();
 	$('.burger_holder').hide();
 	$('.burger_holder').unbind('click').click(function() {
 		$('.mobile_about_bar').slideToggle();
 	});
 	

		var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
		if (isMobile) {
	    	$(".gitbox5").addClass("col-lg-12");
	    	$(".gitbox5").css({"width": "100%", "padding-left": "0px", "padding-right": "0px"});
	    	$(".project_row").css({"width": "100%", "padding-left": "0px", "padding-right": "0px", "margin": "0"});
	    	$(".main_pic").css({"width": "100%", "height": "auto", "padding-left": "0px", "padding-right": "0px"});
			$(".a3content").css({"margin": "0px", "width": "100%", "padding-right": "0px", "padding-left": "0px"});
	    	$(".a4").css({"transform": "translateY(-10px)", "-ms-transform": "translateY(-10px)", "-webkit-transform": "translateY(-10px)"});


		 	$('.about').hide();
		 	$('.burger_holder').show();

			$('.inner-content').css({'height': '100%', 'width': '100%', 'margin': '0px'})

			$('.myform-info').css({'width': '100%'});
			$('.myform-mail').css({'width': '85%'});

			$('.social-block').css({"margin-right": "2%", "margin-left": "2%", "margin-top": "0px"});
		
			var c1_width = $('.c1').width();

			$('.c1').css({'height': c1_width});

 	

		} else {
	    	$(".gitbox5").removeClass("col-lg-12");
	    	$(".gitbox5").css({"width": "400px", "padding-left": "0px", "padding-right": "0px"});
	    	$(".project_row").css({"width": "100%", "padding-left": "0px", "padding-right": "0px"});
	    	$(".main_pic").css({"width": "400px","height": "300px", "padding-left": "0px", "padding-right": "0px"});
			$(".a3content").css({"margin": "auto", "width": "auto"});
	    	$(".a").css({"transform": "translateY(0px)", "-webkit-transform": "translateY(0px)", "-ms-transform": "translateY(0px)"});

	    	$('.about_title').hide();
			$('.about_text').hide();
			$('.about_group').hide();

		 	$('.about').show();
	 	 	$('.mobile_about_bar').hide();

			$('.myform-info').css({'width': '75%'});
			$('.myform-mail').css({'width': '65%'});

			$('.inner-content').css({'height': 'auto', 'width': '70%', 'margin': 'auto'})



			//
			// Social Media Icons ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
			//


			$('.social').unbind('mouseenter').mouseenter(function() {
				var id = $(this).attr('id');
				var id1 = "#" + id;
				var id2 = "#" + id + "-basic";
				var id3 = "#" + id + "-hover";
				
				$(id1).css({"width": "66px", "height": "66px", "background-color": "#d4d4d4", "transition": "0.3s", "-webkit-transition": "0.3s"});
				$(id2).css({"transform": "translateY(100%)", "-webkit-transform": "translateY(100%)", "-ms-transform": "translateY(100%)", "left": "-2px", "transition": "0.3s", "-webkit-transition": "0.3s"});		
				$(id3).css({"transform": "translateY(0)", "-webkit-transform": "translateY(0)", "-ms-transform": "translateY(0)", "left": "-2px", "transition": "0.3s", "-webkit-transition": "0.3s"});
				

				console.log(id2);
			});

				

			$('.social').unbind('mouseleave').mouseleave(function() {
				var id = $(this).attr('id');
				var id1 = "#" + id;
				var id2 = "#" + id + "-basic";
				var id3 = "#" + id + "-hover";
				
				$(id1).css({"width": "70px", "height": "70px", "background-color": "#BF6F7E", "transition": ".3s", "-webkit-transition": "0.3s"});
				$(id2).css({"top": "0px", "transform": "translateY(0)", "-webkit-transform": "translateY(0)", "-ms-transform": "translateY(0)", "transition": "0.01s", "-webkit-transition": "0.01s"});
				$(id3).css({"top": "0px", "transform": "translateY(-100%)", "-webkit-transform": "translateY(-100%)", "-ms-transform": "translateY(-100%)", "transition": "0.01s", "-webkit-transition": "0.01s"});
			
				console.log(id3);
			});

		}


//
// end of mixitup code :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//

//
// Scroll To Section :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//


	function scrollProjects() {
            $('html, body').animate({ scrollTop: $('#a3').offset().top }, 'slow');
            return false;
    };

	function scrollContact() {
            $('html, body').animate({ scrollTop: $('#a4').offset().top }, 'slow');
            return false;
    };

	function scrollSkills() {
            $('html, body').animate({ scrollTop: $('#a2').offset().top }, 'slow');
            return false;
    };

	function scrollAbout() {
            $('html, body').animate({ scrollTop: $('#a1').offset().top }, 'slow');
            return false;
    };

    function scrollTop() {
            $('html, body').animate({ scrollTop: $('.canvas').offset().top }, 'slow');
            return false;
    };

    $('.scroll_projects').unbind('click').click(function(){
    	scrollProjects();
//    	$('.scroll_projects').unbind();
    });

    $('.scroll_about').unbind('click').click(function(){
    	scrollAbout();
//    	$('.scroll_about').unbind();
    });    

    $('.scroll_contact').unbind('click').click(function(){
    	scrollContact();
//    	$('.scroll_contact').unbind();
    });

    $('.scroll_skills').unbind('click').click(function(){
    	scrollSkills();
//    	$('.scroll_skills').unbind();
    });

    $('.canvas_button').unbind('click').click(function() {
    	scrollAbout();
//    	$('.canvas_button').unbind();
    });

    $('.go_to_top').unbind('click').click(function() {
    	scrollTop();
//    	$('.go_to_top').unbind();
    });




 //
 //
 //


//
// modal code :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//
	$('.outer-outer').hide();

	$('.text_btm').click(function() {
		var id = $(this).parent().attr('id');
		var id2 = "#modal" + id;
		$(id2).fadeIn('slow');
		$('.about_bar').css({"z-index": "-1"});
	});

	$('.outer').click(function() {
		$('.outer-outer').fadeOut('slow');
		$('.about_bar').css({"z-index": "+2"});
	});

	$("#picture_carousel").carousel("pause");
	$(".modal_exit").click(function() {
		$('.outer-outer').fadeOut('slow');
		$('.about_bar').css({"z-index": "+2"});
	});


//
// end of modal code ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//

//:::::::::::::: Testing The New PJ Bar :::::::::::::::::::::::::::::::::::::::::::::::::::::

		$('.new_pj_bar').click(function(){
			$(this).siblings().removeClass('active');
			$(this).addClass('active');
		});


		var na = $('.npj1').width();
		var na = na.toFixed(0);
		var na = Number(na);
//		console.log(na);

			var	namr = $('.npj1').css('marginRight');
			var	namr = parseFloat(namr);
			var	namr = namr.toFixed(0);
			var namr = Number(namr);
			var namr1 = namr * 3;
			var namr2 = namr * 5;
			var namr3 = namr * 7;
			var namr4 = namr * 9;


		var nb = $('.npj2').width();
			var nb = Number(nb);


		var nc = $('.npj3').width();
			var nc = Number(nc);


		var nd = $('.npj4').width();
			var nd = Number(nd);


		var ne = $('.npj5').width();
			var ne = Number(ne);

/*
			$('.new_pj_bar_slider').css({
				"left": "auto", "transform": "translateX(" + namr + "px)", "-webkit-transform": "translateX(" + namr + "px)", "-ms-transform": "translateX(" + namr + "px)", "width": na + "px"
			});
			$('.npj1').css({'color': 'white'});
*/		


		$('.npj1').click(function() {
			$('.new_pj_bar_slider').css({
				"left": "auto", "transform": "translateX(" + namr + "px)", "-webkit-transform": "translateX(" + namr + "px)", "-ms-transform": "translateX(" + namr + "px)", "width": na + "px"
			});

			$('.new_pj_bar').css({'color': 'black'});
			$('.npj1').css({'color': 'white'});
		});


		$('.npj2').click(function() {
			$('.new_pj_bar_slider').css({
				"left": "auto", "transform": "translateX(" + (na + namr1) + "px)", "-webkit-transform": "translateX(" + (na + namr1) + "px)", "-ms-transform": "translateX(" + (na + namr1) + "px)", "width": nb + "px"
			});

			$('.new_pj_bar').css({'color': 'black'});
			$('.npj2').css({'color': 'white'});
		});


		var nab = na + nb;
//		console.log(nab);
		$('.npj3').click(function() {
			$('.new_pj_bar_slider').css({
				"left": "auto", "transform": "translateX(" + (nab + namr2) + "px)", "-webkit-transform": "translateX(" + (nab + namr2) + "px)", "-ms-transform": "translateX(" + (nab + namr2) + "px)", "width": nc + "px"
			});

			$('.new_pj_bar').css({'color': 'black'});
			$('.npj3').css({'color': 'white'});
		});


		var nabc = na + nb + nc;
		$('.npj4').click(function() {
			$('.new_pj_bar_slider').css({
				"left": "auto", "transform": "translateX(" + (nabc + namr3) + "px)", "-webkit-transform": "translateX(" + (nabc + namr3) + "px)", "-ms-transform": "translateX(" + (nabc + namr3) + "px)", "width": nd + "px"
			});

			$('.new_pj_bar').css({'color': 'black'});
			$('.npj4').css({'color': 'white'});
		});

//
// End of Testing New PJ Bar
//



//
// Social Media Icons ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//


	$('#linked').unbind('click').click(function(){
//		window.location.href = "https://www.linkedin.com/in/kerron-streater/";
		window.open('https://www.linkedin.com/in/kerron-streater/', '_blank'); 
	});

	$('#git').unbind('click').click(function(){
//		window.location.href = "http://github.com/unseenmonument";
		window.open('http://github.com/unseenmonument', '_blank'); 
	});

	$('#twitter').unbind('click').click(function(){
//		window.location.href = "http://twitter.com/unseenmonument";
		window.open('http://twitter.com/unseenmonument', '_blank'); 
	});

	$('#insta').unbind('click').click(function(){
//		window.location.href = "http://instagram.com/unseenmonument/";
		window.open('http://instagram.com/unseenmonument/', '_blank'); 
	});
	
//
// ::::::::::::: Prevent unwanted form input :::::::::::::::::::::::::::::::::::::::::::
//
	$('.myform-name').unbind().on('input', function() {

//				var no = [",", ".", "/", ";", "'", "[", "]", , "=", "-", "0", "9", "8", "7", "6", "5", "4", "3", "2", "1", "`", "~", "<", ">", "?", ":", '"', "{", "}", "|", "+", "_", ")", "(", "*", "&", "^", "%", "$", "#" "@", "!", "'"]

//				var bro = this.value;

//				var bro.include
//				var bro = bro.toString;	

/*	I was extremely tired and wrote lots of stupid code, here's a sample:
				var a = "a"; var aa = "A";
				var b = "b"; var bb = "B";
				var c = "c"; var cc = "C";
				var d = "d"; var dd = "D";
				var e = "e"; var ee = "E";
				var f = "f"; var ff = "F";
				var g = "g"; var gg = "G";
				var h = "h"; var hh = "H";
				var i = "i"; var ii = "I";
				var j = "j"; var jj = "J";
				var k = "k"; var kk = "K";
				var l = "l"; var ll = "L";
				var m = "m"; var mm = "M";
				var n = "n"; var nn = "N";
				var o = "o"; var oo = "O";
				var p = "p"; var pp = "P";	
				var q = "q"; var qq = "Q";
				var r = "r"; var rr = "R";
				var s = "s"; var ss = "S";
				var t = "t"; var tt = "T";
				var u = "u"; var uu = "U";
				var v = "v"; var vv = "V";
				var w = "w"; var ww = "W";
				var x = "x"; var xx = "X";
				var y = "y"; var yy = "Y";
				var z = "z"; var zz = "Z";
							
				console.log(bro + "1");
				if ((bro === a || aa)  |
				(bro === b || bb) | (bro === c || cc) | (bro === d || dd) |
				(bro === e || ee) | (bro === f || ff) | (bro === g || gg) |
				(bro === h || hh) | (bro === i || ii) | (bro === j || jj) |
				(bro === k || kk) | (bro === l || ll) | (bro === m || mm) |
				(bro === n || nn) | (bro === o || oo) | (bro === p || pp) |
				(bro === q || qq) | (bro === r || rr) | (bro === s || ss) |
				(bro === t || tt) | (bro === u || uu) | (bro === v || vv) |
				(bro === w || ww) | (bro === x || xx) | (bro === y || yy) |
				(bro === z || zz) | (this.include)){

				 		console.log(bro + " does equal " + a);
						$('.tooltiptext').css({'visibility': 'hidden'});
				
				} else if (bro !== a) {
				
						console.log(bro + " doesn't equal " + a);
						$('.tooltiptext').css({'visibility': 'visible'});
				
				};
*/
				function Check(me) {
					me.value = me.value.replace(/[0-9, >, <, ?, :, =, -, ", {, }, |, +, _, ~, !, @, \, #, $, %, ^, &, *, (, `, ', ), ., /, ;, "[" ]/g, "");
				};	
				
				Check(this);				

	});


	$('.myform-name').focus( function() {
		var base = document.querySelector('.myform-name')
		base.addEventListener('keydown', function (event) {

/*		
		    // detecting if something other than a letter is pressed
		    if ((event.keyCode > 47 && event.keyCode < 58) || 
		    	(event.keyCode > 95 && event.keyCode < 105) ||
		    	(event.keyCode === 219) ||
		    	(event.keyCode === 220) ||
		    	(event.keyCode === 221) ||
		    	(event.keyCode === 222) ||
		    	(event.keyCode === 186) ||
		    	(event.keyCode === 187) ||
		    	(event.keyCode === 188) ||
		    	(event.keyCode === 189) ||
		    	(event.keyCode === 191) || 
		    	(event.keyCode === 192)) {
*/
		    if ((event.which > 47 && event.which < 58) || 
		    	(event.which > 95 && event.which < 105) ||
		    	(event.which === 219) ||
		    	(event.which === 220) ||
		    	(event.which === 221) ||
		    	(event.which === 222) ||
		    	(event.which === 186) ||
		    	(event.which === 187) ||
		    	(event.which === 188) ||
		    	(event.which === 189) ||
		    	(event.which === 191) || 
		    	(event.which === 192)) {
	
		//    		alert(event.keyCode);

			        // prevent default behaviour
			        event.preventDefault();
			        $('.myform-info').on('focusOut keydown mouseenter mouseleave click', function(){
						$('.tooltiptext').css({'visibility': 'hidden'});
					});
			        $('.tooltiptext').css({'visibility': 'visible'});			        
		        };
		});

	});

};

$( document ).ready(myfunction);

$( window ).resize(myfunction);

// Code put here specifically only needs to run at page load, not on resize or scroll
$( document ).ready(function() {
		$(".blank").hide();

	
        $(document).on("turbolinks:load",function(){
		  $('.t-tooltip').tooltip();
		})
    

	// The Typewriter Effect for the about section	
		var type_count = 0;
		$('#a1').hover(typeWriter);
			var i = 0;
			var txt = 'ALLOW ME TO INTRODUCE MYSELF...';
			var speed = 200;

		function typeWriter() {
			if (i < txt.length && type_count < txt.length) {
			    document.getElementById("intro").innerHTML += txt.charAt(i);
			    i++;
			    type_count++;
			    setTimeout(typeWriter, speed);
			};
		};


		$.fn.isInViewport = function() {
		  var elementTop = $(this).offset().top;
		  var elementBottom = elementTop + $(this).outerHeight();

		  var viewportTop = $(window).scrollTop();
		  var viewportBottom = viewportTop + $(window).height();

		  return elementBottom > viewportTop && elementTop < viewportBottom;
		};


		$(window).on('resize scroll', function() {

		    if  ( $(".intro_holder").isInViewport() ) {
				typeWriter();
		    } else {

		    }

		    //This is here for the about section, breaks if not in this resize section
		    if  ( $(".about_group").isInViewport() ) {

				$('.about_group').delay(100).fadeIn(1000);
				$('.about_title').delay(2000).slideDown(1000);
				$('.about_text').delay(2000).slideDown(1000);

		    } else {

		    }

		    if  ( $(".man_myth").isInViewport() ) {
		    	$(".slide-bar").css({ "left": "-300px", "animation": "slide 1.5s forwards", "animation-delay": "0.5s"});
		    

		    } else {

		    }

		    
		 });
	// End of Typewriter code

	// About Section
		$('.about_title').hide();
		$('.about_text').hide();
		$('.about_group').hide();



	// About Bar Slider
		var na = $('.npj1').width();
		var na = na.toFixed(0);
		var na = Number(na);

			var	namr = $('.npj1').css('marginRight');
			var	namr = parseFloat(namr);
			var	namr = namr.toFixed(0);
			var namr = Number(namr);

		$('.new_pj_bar_slider').css({
				"left": "auto", "transform": "translateX(" + namr + "px)", "-webkit-transform": "translateX(" + namr + "px)", "-ms-transform": "translateX(" + namr + "px)", "width": na + "px"
			});
		$('.npj1').css({'color': 'white'});	
	// End of About Bar Slider

});
// end of that little fix

//
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//