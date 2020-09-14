browser.browserAction.onClicked.addListener(() => {
browser.tabs.saveAsPDF({}); 
browser.browserAction.setIcon({path: "check.png"}); 
browser.browserAction.setTitle({title: "saved"}); 
setTimeout(function() {
browser.browserAction.setIcon({path: "icon.png"});
browser.browserAction.setTitle({title: "Export Web to PDF"}); },5000); });
