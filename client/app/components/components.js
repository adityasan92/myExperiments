import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import List from './list/list';

let componentModule = angular.module('app.components', [
  Home.name,
  About.name,
  List.name
]);

export default componentModule;
