'use strict';

let deferredInstallPrompt = null;
const installButton = document.getElementById('butInstall');
installButton.addEventListener('click', installPWA);

// CODELAB: Add event listener for beforeinstallprompt event
window.addEventListener('beforeinstallprompt', saveBeforeInstallPromptEvent);

function saveBeforeInstallPromptEvent(evt) {
  // CODELAB: Add code to save event & show the install button.
  deferredInstallPrompt = evt;
  installButton.removeAttribute('hidden');
}

function installPWA(evt) {
  // CODELAB: Add code show install prompt & hide the install button.
  deferredInstallPrompt.prompt();
  // Hide the install button, it can't be called twice.
  evt.srcElement.setAttribute('hidden', true);
  // CODELAB: Log user response to prompt.
  deferredInstallPrompt.userChoice
      .then((choice) => {
        if (choice.outcome === 'accepted') {
          console.log('ACEPTADO', choice);
        } else {
          console.log('NO ACEPTADO', choice);
        }
        deferredInstallPrompt = null;
      });
}

// CODELAB: Add event listener for appinstalled event
window.addEventListener('appinstalled', logAppInstalled);
function logAppInstalled(evt) {
  // CODELAB: Add code to log the event
  console.log('APP INSTALADA.', evt);

}
