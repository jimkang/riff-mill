var RouteState = require('route-state');
var handleError = require('handle-error-web');
var getAudioContext = require('./karplus-strong/webaudio');
var Guitar = require('./karplus-strong/guitar');
var startGuitarPlaying = require('./karplus-strong/sequencer');

var routeState = RouteState({
  followRoute,
  windowObject: window
});

(function go() {
  window.onerror = reportTopLevelError;
  routeState.routeFromHash();
})();

function followRoute(routeDict) {
  // TODO: Look at the key-value pairs in routeDict and
  var guitar;
  var audioCtx = getAudioContext();

  if (audioCtx === null) {
    console.log('Error obtaining audio context.');
  } else {
    guitar = new Guitar(audioCtx, audioCtx.destination);
    startGuitarPlaying(audioCtx, guitar);
  }

  // decide how your app should respond based on that.
}

function reportTopLevelError(msg, url, lineNo, columnNo, error) {
  handleError(error);
}
