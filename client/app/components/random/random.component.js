import template from './random.html';
import controller from './random.controller';
import './random.styl';

let randomComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default randomComponent;
