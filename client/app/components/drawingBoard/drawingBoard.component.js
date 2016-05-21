import template from './drawingBoard.html';
import controller from './drawingBoard.controller';
import './drawingBoard.styl';

let drawingBoardComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default drawingBoardComponent;
