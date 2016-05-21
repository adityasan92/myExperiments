import angular from 'angular';
import uiRouter from 'angular-ui-router';
import drawingBoardComponent from './drawingBoard.component';

let drawingBoardModule = angular.module('drawingBoard', [
  uiRouter
])

.component('drawingBoard', drawingBoardComponent);

export default drawingBoardModule;
