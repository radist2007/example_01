// Loader
document.addEventListener( 'DOMContentLoaded', function () {
	setTimeout(function(){
		let b = document.getElementsByTagName("body");
		b[0].className += "loaded";
		$('body').css('overflow', 'auto')
		tlm();
	}, 3000);

	//Ask question show on scrol
	$(document).scroll(function(){
		// var y = $(this).scrollTop();
		// var w = window.innerHeight;
		// if (y > ( w )) {
		// 	$('.wrappContainer').fadeIn(2000);
		// }else{
		// 	$('.wrappContainer').fadeOut(1000);
		// }
	})
	// Ask question down on click
	var mouseOverActiveElement = false;
	$('.wrappContainer').on('mouseenter', function(){
		mouseOverActiveElement = true;
	}).on('mouseleave', function() {
		mouseOverActiveElement = false;
	});
	$("body").click(function(e){
		if(!mouseOverActiveElement) {
			if($(".ask-wrapper input[name=toggle]").is(':checked')){
				$(".ask-wrapper input[name=toggle]").prop('checked', false);
			}
		}
	})
	// Ask question blur
	$(".userInput").focus(function(){
		$(this).parent().addClass("focus");
	}).blur(function(){
		if($(this).val() === ""){
			$(this).parent().removeClass("focus");
		}
	})

	// Login pop
	// $("#login").on('click', function(){
	// 	alert('text');
	// })

	// GSAP
	function tlm() {
		let t1 = new TimelineMax();
		t1
			.fromTo('.logo' , 1, {y:-100, opacity: 0}, {y: 0, opacity: 1})
			.fromTo('#login', 1, {y: -100, opacity: 0}, {y: 0, opacity: 1}, "-=0.5", false)
			.fromTo('.hero h1', 1, {y: -100, opacity: 0}, {y: 0, opacity: 1},"-=0.5")
			.staggerFromTo('nav a', 3, {opacity:0}, {opacity: 1}, 0.1, "-=0.5")
			
	}

	// Velocityjs 
	// scroll to top
	const body = document.querySelector('body');
	const button = document.querySelector('.topBtn');
	const options = {
		duration: 1000
	}	
	button.addEventListener('click', function(){
		Velocity(body, 'scroll', options);
	})
	// scroll to #
	const sections = document.querySelectorAll('section');
	const navigation = document.querySelector('nav');
	navigation.addEventListener('click', function(e){
		let target = e.target;
		if(target && target.tagName.toLowerCase() === 'a') {
			let attr = target.getAttribute('href').slice(1);
			console.log(attr);
			Velocity( sections[attr], 'scroll', options );
		}

	})


});
