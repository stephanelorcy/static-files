function isAndroid() {
	var result = !(typeof Android == "undefined");
	if(result) {
		console.log("Android");
	} else {
		console.log("Not Android");
	}
	return result;
}

function startAction() {
	try {
		if(isAndroid()) {
				Android.startCapture();
		} else {
			webkit.messageHandlers.callback.postMessage("start");
		}
	} catch(err) {
		setText('[ERROR] Problem calling native app - Not in a mobile device ?');
	}
}

function setText(message) {
	document.getElementsByClassName("title")[0].innerHTML = message;
}