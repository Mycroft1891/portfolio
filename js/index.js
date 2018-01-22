this.registerSW();

function registerSW() {
  if (!navigator.serviceWorker) return;
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js', {scope: './'}).then(function(registration) {
      if (!navigator.serviceWorker.controller) {
        return;
      }
      console.log('Service worker registration succeeded:', registration);
    }).catch(function(error) {
      console.log('Service worker registration failed:', error);
    });
  } else {
    console.log('Service workers are not supported.');
  }
}
