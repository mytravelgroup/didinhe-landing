'use strict';

/**
 * Init custom functions
 */
(function initWelcomeMessage() {
  console.log('didinhe landing page init successfully');
})();

/**
 * Init universal function
 */

function getAppScheme() {
  const $body = document.body;
  if ($body.classList.contains('staging')) return 'didinhe-staging://';
  if ($body.classList.contains('develop')) return 'didinhe-dev://';
  return 'didinhe://';
}

function getAppStoreURL() {
  const $body = document.body;
  if ($body.classList.contains('staging'))
    return 'https://testflight.apple.com/join/HJkMQiUU';
  if ($body.classList.contains('develop'))
    return 'https://apps.apple.com/us/app/didinhe-dev/id1551013653';
  return 'https://apps.apple.com/us/app/didinhe/id1551013653';
}

(function initUniversalFunction() {
  const appScheme = getAppScheme();
  const baseUrl = `${appScheme}trip_join?tripId=`;
  const linkButton = document.getElementById('open-app-btn');
  if (!linkButton) return;

  // get the app url and params from address bar
  const tripId = new URLSearchParams(window.location.search).get('tripId');
  if (!tripId) return;

  const tripDetailUrl = `${baseUrl}${tripId}`;
  linkButton.addEventListener('click', () => {
    const TIME_OUT = 3000; // Time to wait before redirecting to the App Store
    const now = new Date().getTime();
    const link = document.createElement('a');

    link.href = tripDetailUrl;
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();

    // Set a timeout to redirect to the App Store if the app is not installed
    setTimeout(function () {
      var elapsed = new Date().getTime() - now;
      if (elapsed < TIME_OUT + 100) {
        // 100 ms buffer
        window.location.href = getAppStoreURL();
      }
    }, TIME_OUT);

    // Clean up the iframe after some time to avoid memory leaks
    setTimeout(function () {
      document.body.removeChild(iframe);
    }, TIME_OUT + 1000);
  });
})();
