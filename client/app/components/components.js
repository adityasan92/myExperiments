import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import List from './list/list';
import DrawingBoard from './drawingBoard/drawingBoard';
import Drawcard from './drawcard/drawcard';

let componentModule = angular.module('app.components', [
  Home.name,
  About.name,
  List.name,
  DrawingBoard.name,
  Drawcard.name
]);

export default componentModule;
