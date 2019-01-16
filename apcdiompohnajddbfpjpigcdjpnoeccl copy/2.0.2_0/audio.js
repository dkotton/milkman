chrome.browserAction.onClicked.addListener(function(tab) {
    var myAudio = new Audio();
    myAudio.src = "audio.mp3";
    myAudio.play();
});