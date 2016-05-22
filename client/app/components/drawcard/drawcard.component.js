import template from './drawcard.html';
import controller from './drawcard.controller';
import './drawcard.styl';

let drawcardComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default drawcardComponent;
