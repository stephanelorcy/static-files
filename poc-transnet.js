function startAction() {
	try {
		webkit.messageHandlers.callback.postMessage("start");
	} catch(err) {
		console.log('There was some problem sending message native app - Not in a mobile device ?');
	}
}


function setText(message) {
	document.getElementsByClassName("title")[0].innerHTML = message;
}