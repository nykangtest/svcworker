// register service worker
var registration;

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/svcworker/sw.js', { scope: '/svcworker/' })
    .then(function(reg) {
      registration = reg;
    
      if(reg.installing) {
        console.log('Service worker installing');
      } else if(reg.waiting) {
        console.log('Service worker installed');
      } else if(reg.active) {
        console.log('Service worker active');
      }
    })
    .catch(function(error) {
      // registration failed
      console.log('Registration failed with ' + error);
    });
};

function unregister() {
  registration.unregister()
    .then(function() {
      console.log('unregistered..');
    });
}
