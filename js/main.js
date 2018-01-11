// Loader
document.addEventListener( 'DOMContentLoaded', function () {
	setTimeout(function(){
		let b = document.getElementsByTagName("body");
		b[0].className += "loaded";
		$('body').css('overflow', 'auto')
	}, 3000);

			// $('.ask-fade').fadeOut();

	//Ask question show on scrol
	$(document).scroll(function(){
		var y = $(this).scrollTop();
		var w = window.innerHeight;
		console.log(w)
		if (y > ( w/2 )) {
			$('.wrappContainer').fadeIn();
		}else{
			$('.wrappContainer').fadeOut();
		}
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

});
