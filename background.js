browser.browserAction.onClicked.addListener(() => {
browser.tabs.saveAsPDF({}); 
browser.browserAction.setIcon({path: "check.png"}); 
browser.browserAction.setTitle({title: "saved"}); 
setTimeout(function() {
browser.browserAction.setIcon({path: "icon.png"});
browser.browserAction.setTitle({title: "Export Web to PDF"}); },10000); });
function a(b) {
if(b.length < 0) {
var c = browser.downloads.open(b[0].id);
c.then(d, e); } }
function d() {
console.log("Opened correctly"); }
function e(f) {
console.log("Error opening file"); }
var g = browser.downloads.search({
  limit: 1,
  orderBy: ["-startTime"]
});
g.then(c, f);

