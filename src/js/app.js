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
  const APP_TRIP_URL_STAGING = 'didinhe-staging://trip_details?tripId=';
  const APP_TRIP_URL_DEV = 'didinhe-dev://trip_details?tripId=';
  const $body = document.body;

  const baseUrl = $body.classList.contains('staging')
    ? APP_TRIP_URL_STAGING
    : $body.classList.contains('develop')
    ? APP_TRIP_URL_DEV
    : APP_TRIP_URL;

  const linkButton = document.getElementById('open-app-btn');
  if (!linkButton) return;

  // get the app url and params from address bar
  const tripId = new URLSearchParams(window.location.search).get('tripId');
  if (!tripId) return;

  const tripDetailUrl = `${baseUrl}${tripId}`;
  linkButton.setAttribute('href', tripDetailUrl);
  linkButton.click();
})();
