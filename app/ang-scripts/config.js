'use strict';

angular.module('config', ['sboAppService'])

.constant('ENV', {
  'appName': 'Study Book Online',
  'apiBaseUrl': 'http://192.168.1.126:3003/admin'
});