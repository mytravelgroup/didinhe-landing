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
(function initUniversalFunction() {
  const APP_TRIP_URL = 'didinhe://trip_details?tripId=';
  const linkButton = document.getElementById('open-app-btn');
  if (!linkButton) return;

  // get the app url and params from address bar
  const tripId = new URLSearchParams(window.location.search).get('tripId');
  if (!tripId) return;

  const tripDetailUrl = `${APP_TRIP_URL}${tripId}`;
  linkButton.setAttribute('href', tripDetailUrl);
  // linkButton.click();
})();
