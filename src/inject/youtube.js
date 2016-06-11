chrome.extension.sendMessage({}, function(response) {




	function blockAndDisplay() {


	    $('#feed').remove();

	}

	window.setInterval(blockAndDisplay, 10);


});
