document.addEventListener( 'DOMContentLoaded', function () {
	setTimeout(function(){
		let b = document.getElementsByTagName("body");
		b[0].className += "loaded";
	}, 3000);


});
