/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'portfolio',
    podModulePrefix: 'portfolio/pods',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    localOriginEndPoint: '',
    originEndPoint: ' https://my.server.com/ http://my.server.com/',
    s3Endpoint: ' https://fantasyinsiders-frontend.s3.amazonaws.com/',
    amazonEndpoint: ' http://fantasyinsiders-dev.s3.amazonaws.com/',
    amazonAWSHost: 'https://fantasyinsiders-dev.s3.amazonaws.com',
    paypalEndPoint: 'https://www.sandbox.paypal.com/ htttps://paypal.com',
    stripeEndPoint: ' https://js.stripe.com/v2/ ',
    mandrillAPIKey: 'WGCDtVARhPsIK7cxPkAUsw',
    emailTo: 'pointhomefinal@gmail.com',
    authorName: 'Vladimir Katansky'
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {//https://fonts.googleapis.com

  }

  ENV.contentSecurityPolicy = {
    'default-src': "'self' " + ENV.apiHost + ENV.s3Endpoint + ENV.amazonEndpoint + ENV.originEndPoint,
    'script-src': "'self' 'unsafe-inline' 'unsafe-eval' http://www.google-analytics.com/ga.js https://connect.facebook.net https://mts1.googleapis.com https://mts0.googleapis.com " +
      "http://connect.facebook.net https://platform.twitter.com http://platform.twitter.com https://cdn.syndication.twimg.com " +
      "https://maps.googleapis.com " + ENV.apiHost + ENV.s3Endpoint + ENV.amazonEndpoint + ENV.originEndPoint + ENV.stripeEndPoint,
    'font-src': "'self' http://fonts.gstatic.com data: https://fonts.gstatic.com " + ENV.apiHost + ENV.s3Endpoint + ENV.amazonEndpoint + ENV.originEndPoint,
    'connect-src': "'self' " + ENV.apiHost + ENV.s3Endpoint + ENV.amazonEndpoint + ENV.originEndPoint + ENV.paypalEndPoint,
    'img-src': "'self' https://syndication.twitter.com https://www.facebook.com https://pbs.twimg.com https://abs.twimg.com " +
      "https://fantasyinsiders-dev.s3.amazonaws.com https://lh3.googleusercontent.com http://platform.twitter.com " +
      "https://maps.googleapis.com https://mts1.googleapis.com https://mts0.googleapis.com https://csi.gstatic.com/csi https://maps.gstatic.com/ " +
      ENV.apiHost + ENV.s3Endpoint + ENV.amazonEndpoint,
    'style-src': "'self' 'unsafe-inline https://fonts.googleapis.com http://platform.twitter.com http://maps.gstatic.com https://maps.gstatic.com "
      + ENV.apiHost + ENV.s3Endpoint + ENV.amazonEndpoint + ENV.originEndPoint,
    'frame-src':  ENV.stripeEndPoint + ENV.apiHost + ENV.s3Endpoint + ENV.amazonEndpoint + ENV.originEndPoint + ' http://www.youtube.com ' +
      'https://www.facebook.com http://static.ak.facebook.com https://s-static.ak.facebook.com https://www.youtube.com http://www.podbean.com ' +
      'https://web.facebook.com',
    'report-uri': '/'
  };

  return ENV;
};
