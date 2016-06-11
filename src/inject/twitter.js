chrome.extension.sendMessage({}, function(response) {




	function blockAndDisplay() {


	    $('.stream').css("display","none");

	}

	window.setInterval(blockAndDisplay, 10);


});
