'use strict';

angular.module('config', ['sboAppService'])

.constant('ENV', {
  'appName': 'Study Book Online',
  'apiBaseUrl': 'http://localhost:3003/'
});