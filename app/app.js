require.config({
  baseUrl: '/media/',
  paths: {
    components: 'components',
    app: 'app',
    tpl: 'tpl',
    'underscore': 'components/lodash/dist/lodash',
    'backbone': 'components/backbone-amd/backbone',
    'backbone-all': 'lib/backbone-all',
    'backbone.noConflict': 'lib/backbone.noConflict',
    'backbone.marionette': 'components/backbone.marionette/lib/core/amd/backbone.marionette',
    'backbone.wreqr': 'components/backbone.wreqr/lib/amd/backbone.wreqr',
    'backbone.babysitter': 'components/backbone.babysitter/lib/amd/backbone.babysitter',
    //'backbone.iobind': 'components/backbone.iobind/dist/backbone.iobind',
    //'backbone.iosync': 'components/backbone.iobind/dist/backbone.iosync',
    'backbone.iobind': 'vendor/backbone.iobind',
    'backbone.iosync': 'vendor/backbone.iosync',
    'mustache': 'components/mustache/mustache',
    'jquery': 'components/jquery/jquery',
    'bootstrap': 'vendor/bootstrap/docs/assets/js/bootstrap.min',
    'text': 'components/text/text',
    'q': 'components/q/q'

  },
  map: {
    '*': {
      'backbone': 'backbone-all'
    },
    'backbone-all': {
      'backbone': 'backbone.noConflict'
    },
    'backbone.marionette': {
      'backbone': 'backbone.noConflict'
    },
    'backbone.wreqr': {
      'backbone': 'backbone.noConflict'
    },
    'backbone.babysitter': {
      'backbone': 'backbone.noConflict'
    },
    'backbone.iosync': {
      'backbone': 'backbone.noConflict'
    },
    'backbone.iobind': {
      'backbone': 'backbone.noConflict'
    },
    'backbone.noConflict': {
      'backbone': 'backbone'
    }
  },
  shim: {
    'bootstrap': ['jquery']
  }

});



require(['underscore'], function(_) {
  console.log('hi lsaa. tony');
});
