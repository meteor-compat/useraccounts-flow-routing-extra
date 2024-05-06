// Package metadata for Meteor.js web platform (https://www.meteor.com/)
// This file is defined within the Meteor documentation at
//
//   http://docs.meteor.com/#/full/packagejs
//
// and it is needed to define a Meteor package
'use strict';

Package.describe({
  name: 'useraccounts:flow-routing-extra',
  summary: 'UserAccounts package providing routes configuration capability via ostrio:flow-router-extra.',
  version: '1.1.0',
  git: 'https://github.com/meteor-compat/useraccounts-flow-routing-extra',
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@2.4');

  api.use('ecmascript');

  api.use([
    'check',
    'ostrio:flow-router-extra@3.7.5',
    'underscore',
    'useraccounts:core@1.15.0',
    'modules'
  ], ['client', 'server']);

  api.use([
     'react@0.14.1_1',
     'kadira:react-layout@1.5.3',
     'gwendall:blaze-to-react@0.1.2'
  ], ['client', 'server'], { weak: true });

  api.addFiles([
    'lib/core.js',
  ], ['client', 'server']);

  api.addFiles([
    'lib/client/client.js',
    'lib/client/templates_helpers/at_input.js',
  ], ['client']);
});
