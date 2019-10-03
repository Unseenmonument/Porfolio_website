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



$( document ).ready(myfunction);
$( window ).resize(myfunction);

function myfunction() {
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



//	$( window ).resize(function() {

		function detectmob() {
		   if(window.innerWidth <= 800 && window.innerHeight <= 600) {
		     return true;
		     console.log("true");

		     $(".gitbox5").addClass("col-lg-12");

		   } else {
		     return false;
		     console.log("false");
		   }
		}

		detectmob();

		var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
		if (isMobile) {
	    	$(".gitbox5").addClass("col-lg-12");
	    	$(".gitbox5").css({"width": "100%", "padding-left": "0px", "padding-right": "0px"});
	    	$(".project_row").css({"width": "100%", "padding-left": "0px", "padding-right": "0px", "margin": "0"});
	    	$(".main_pic").css({"width": "100%", "padding-left": "0px", "padding-right": "0px"});
			$(".a3content").css({"margin": "0px", "width": "100%", "padding-right": "0px", "padding-left": "0px"});
	    	$(".a4").css({"transform": "translateY(-10px)"});

	    	$('.about_title').show();
			$('.about_text').show();
			$('.about_group').show();

		} else {
	    	$(".gitbox5").removeClass("col-lg-12");
	    	$(".gitbox5").css({"width": "400px", "padding-left": "0px", "padding-right": "0px"});
	    	$(".project_row").css({"width": "100%", "padding-left": "0px", "padding-right": "0px"});
	    	$(".main_pic").css({"width": "400px", "padding-left": "0px", "padding-right": "0px"});
			$(".a3content").css({"margin": "auto", "width": "auto"});
	    	$(".a").css({"transform": "translateY(0px)"});

	    	$('.about_title').hide();
			$('.about_text').hide();
			$('.about_group').hide();
		}
//	});

//
// end of mixitup code :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//

//
// Scroll To Section :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//

//	$('.scroll_contact').click(function(){
//		document.getElementById('a4').scrollIntoView();
//	});

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

    $('.scroll_projects').click(function(){
    	scrollProjects();
    });

    $('.scroll_about').click(function(){
    	scrollAbout();
    });    

    $('.scroll_contact').click(function(){
    	scrollContact();
    });

    $('.scroll_skills').click(function(){
    	scrollSkills();
    });

    $('.canvas_button').click(function() {
    	scrollAbout();
    });

    $('.go_to_top').click(function() {
    	scrollTop();
    });


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
		$('.about_bar').css({"z-index": "auto"});
	});

	$("#picture_carousel").carousel("pause");

//
// end of modal code ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//

/*	$('.projects').hide();
	$('.pj_bar').click(function(){
		$(this).siblings().removeClass('active');
		$(this).addClass('active');
	});


	a = $('.pj1').width();
	b = $('.pj2').width();
	c = $('.pj3').width();
	d = $('.pj4').width();
	e = $('.pj5').width();


	$('.pj_bar_slider').css({
			"left": "auto", "width": a + "px", "opacity": "0.7"
		});
	
			$('.new_pj_bar_slider').css({
					"left": "auto", "width": na + "px", "opacity": "0.7"
				});

	$('.pj1').click(function() {
		$('.pj_bar_slider').css({
			"left": "auto", "transform": "translateX(0px)", "width": a + "px"
		});
	});


	$('.pj2').click(function() {
		$('.pj_bar_slider').css({
			"left": "auto", "transform": "translateX(" + a + "px)", "width": b + "px"
		});
	});


	var ab = a + b;
	var ab = ab.toFixed(2);
	$('.pj3').click(function() {
		$('.pj_bar_slider').css({
			"left": "auto", "transform": "translateX(" + ab + "px)", "width": c + "px"
		});
	});


	var abc = a + b + c;
	var abc = abc.toFixed(2);
	$('.pj4').click(function() {
		$('.pj_bar_slider').css({
			"left": "auto", "transform": "translateX(" + abc + "px)", "width": d + "px"
		});
	});


	var new_e = e / 2;
	var new_e = new_e.toFixed(2);
	$('.pj_center').css({"width": a + b + c + d + e + "px", "transform": "translateX(" + new_e + "px)"});
*/
//:::::::::::::: Testing The New PJ Bar :::::::::::::::::::::::::::::::::::::::::::::::::::::



		$('.new_pj_bar').click(function(){
			$(this).siblings().removeClass('active');
			$(this).addClass('active');
		});


		var na = $('.npj1').width();
		var na = na.toFixed(0);
		var na = Number(na);
		console.log(na);

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
//			var ne = parseInt(ne);
//			var ne = ne.toFixed(2);

			$('.new_pj_bar_slider').css({
				"left": "auto", "transform": "translateX(" + namr + "px)", "width": na + "px"
			});		


		$('.npj1').click(function() {
			$('.new_pj_bar_slider').css({
				"left": "auto", "transform": "translateX(" + namr + "px)", "width": na + "px"
			});
		});


		$('.npj2').click(function() {
			$('.new_pj_bar_slider').css({
				"left": "auto", "transform": "translateX(" + (na + namr1) + "px)", "width": nb + "px"
			});
		});


		var nab = na + nb;
		console.log(nab);
		$('.npj3').click(function() {
			$('.new_pj_bar_slider').css({
				"left": "auto", "transform": "translateX(" + (nab + namr2) + "px)", "width": nc + "px"
			});
		});


		var nabc = na + nb + nc;
		$('.npj4').click(function() {
			$('.new_pj_bar_slider').css({
				"left": "auto", "transform": "translateX(" + (nabc + namr3) + "px)", "width": nd + "px"
			});
		});
	
// ::::::::::::: The About Section ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

	$('.about_title').hide();
	$('.about_text').hide();
	$('.about_group').hide();

	$('#a1').hover(function() {
		$('.about_group').delay(100).fadeIn(1000);
		$('.about_title').delay(2000).fadeIn(1000);
		$('.about_text').delay(2000).fadeIn(1000);
	});

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

//	$('.pic2').hide();
//	$('.pic3').hide();

//
// Social Media Icons ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//


	$('.social').mouseenter(function() {
		var id = $(this).attr('id');
		var id1 = "#" + id;
		var id2 = "#" + id + "-basic";
		var id3 = "#" + id + "-hover";
		
		$(id1).css({"width": "66px", "height": "66px", "background-color": "green", "margin-right": "17px", "margin-left": "17px", "margin-top": "2px", "margin-bottom": "2px", "transition": "0.3s"});
		$(id2).css({"transform": "translateY(100%)", "left": "-2px", "transition": "0.3s"});		
		$(id3).css({"transform": "translateY(0)", "left": "-2px", "transition": "0.3s"});
		

		console.log(id2);
	});

		

	$('.social').mouseleave(function() {
		var id = $(this).attr('id');
		var id1 = "#" + id;
		var id2 = "#" + id + "-basic";
		var id3 = "#" + id + "-hover";
		
		$(id1).css({"width": "70px", "height": "70px", "background-color": "red", "margin-right": "15px", "margin-left": "15px", "margin-top": "0px", "margin-bottom": "0px", "transition": ".3s"});
		$(id2).css({"margin-left": "auto", "margin-right": "auto", "left": "0px", "top": "0px", "transform": "translateY(0)", "transition": "0.01s"});
		$(id3).css({"margin-left": "auto", "margin-right": "auto", "left": "0px", "top": "0px", "transform": "translateY(-100%)", "transition": "0.01s"});
	
		console.log(id3);
	});

	$('#linked').click(function(){
//		window.location.href = "https://www.linkedin.com/in/kerron-streater/";
		window.open('https://www.linkedin.com/in/kerron-streater/', '_blank'); 
	});

	$('#git').click(function(){
//		window.location.href = "http://github.com/unseenmonument";
		window.open('http://github.com/unseenmonument', '_blank'); 
	});

	$('#twitter').click(function(){
//		window.location.href = "http://twitter.com/unseenmonument";
		window.open('http://twitter.com/unseenmonument', '_blank'); 
	});

	$('#insta').click(function(){
//		window.location.href = "http://instagram.com/unseenmonument/";
		window.open('http://instagram.com/unseenmonument/', '_blank'); 
	});
	

};

//
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//