// Script for running a script after clicking the extension
chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.executeScript(null,{file:"mlg.js"});
    chrome.tabs.executeScript(null,{file:"runJohnCena.js"});
});