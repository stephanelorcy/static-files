function isAndroid() {
	return Android;
}

function isIos() {
	return webKit && webkit.messageHandlers && webkit.messageHandlers.callback;
}

function startAction() {
	try {
		if(isIos()) {
			webkit.messageHandlers.callback.postMessage("start");
		} else {
			if(isAndroid()) {
				Android.startCapture();
			} else {
				setText("Not in a mobile device (IOS or Android)");
			}
 		}
	} catch(err) {
		setText('[ERROR] Problem calling native app - Not in a mobile device ?');
	}
}

function setText(message) {
	document.getElementsByClassName("title")[0].innerHTML = message;
}