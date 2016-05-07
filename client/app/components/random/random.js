import angular from 'angular';
import uiRouter from 'angular-ui-router';
import randomComponent from './random.component';

let randomModule = angular.module('random', [
  uiRouter
])

.component('random', randomComponent);

export default randomModule;
