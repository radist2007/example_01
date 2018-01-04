document.addEventListener( 'DOMContentLoaded', function () {
	setTimeout(function(){
		let b = document.getElementsByTagName("body");
		b[0].className += "loaded";
	}, 3000);

	$(".userInput").focus(function(){
		$(this).parent().addClass("focus");
	}).blur(function(){
		if($(this).val() === ""){
			$(this).parent().removeClass("focus");
		}
	})

});
