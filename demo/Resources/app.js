// We are in app.js

var win = Ti.UI.createWindow({fullscreen: true, backgroundColor: 'white'});
var header = Ti.UI.createView({
  backgroundColor: '#333',
  left: 0, top: 0, right: 0, height: 44,
  visible: false
});
var button = Ti.UI.createButton({
  backgroundColor: 'black',
  left: 2, top: 2, bottom: 2, width: 40
});
var webview = Ti.UI.createWebView({
  left: 0, top: 44, right: 0, bottom: 0,
  url: 'webapp.html'
});


Ti.App.addEventListener('header:show', function () {
    header.show();
});

button.addEventListener('click', function () {
    Ti.App.fireEvent('menu:show');
});


header.add(button);
win.add(header);
win.add(webview);
win.open();
