import angular from 'angular';
import uiRouter from 'angular-ui-router';
import drawcardComponent from './drawcard.component';

let drawcardModule = angular.module('drawcard', [
  uiRouter
])

.component('drawcard', drawcardComponent);

export default drawcardModule;
