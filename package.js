Package.describe({
  name: 'clinical:oauth',
  summary: "Common code for OAuth-based services in the clinical setting.",
  version: "1.2.17",
  git: 'https://github.com/clinical-meteor/oauth'
});

Package.onUse(function (api) {
  api.use('meteor-platform@1.2.6');

  api.use('check@1.2.5');
  api.use('underscore@1.0.10');

  api.use('routepolicy@1.0.12', 'server');
  api.use('webapp@1.4.0', 'server');
  api.use('mongo@1.3.1', 'server');

  api.use('reload@1.1.11', 'client');
  api.use('base64@1.0.10', 'client');
  api.use('ecmascript@0.9.0');

  api.use([
    'service-configuration@1.0.11', 
    'logging@1.1.19'
  ], 'server');

  api.use('oauth-encryption@1.3.0', 'server', {weak: true});

  api.use('localstorage@1.2.0');
  api.use('url@1.1.0');

  api.export('OAuth');
  api.export('OAuthTest', 'server', {testOnly: true});

  api.addFiles('oauth_client.js', 'web');
  api.addFiles('oauth_browser.js', 'web.browser');
  api.addFiles('oauth_cordova.js', 'web.cordova');
  api.addFiles('oauth_server.js', 'server');
  api.addFiles('pending_credentials.js', 'server');

  api.addAssets([
    'end_of_popup_response.html',
    'end_of_redirect_response.html'
  ], 'server');

  api.addAssets([
    'end_of_popup_response.js',
    'end_of_redirect_response.js'
  ], 'client');

  api.addFiles('oauth_common.js');

  // XXX COMPAT WITH 0.8.0
  api.addFiles('deprecated.js', ['client', 'server']);
});


Package.onTest(function (api) {
  api.use('tinytest');
  api.use('random');
  api.use('service-configuration', 'server');
  api.use('oauth', 'server');
  api.addFiles("oauth_tests.js", 'server');
});

Cordova.depends({
  'cordova-plugin-inappbrowser': '1.7.1'
});

// Npm.depends({
//   "lodash": "4.17.4"
// });
