import angular from 'angular';
import angularMeteor from 'angular-meteor';
import formsSubmit from '../imports/components/forms';
import '../imports/startup/accounts-config.js';
angular.module('eitManagement', [
  angularMeteor,
  formsSubmit.name,
  'accounts.ui'
]);