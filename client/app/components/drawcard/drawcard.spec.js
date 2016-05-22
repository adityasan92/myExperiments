import DrawcardModule from './drawcard'
import DrawcardController from './drawcard.controller';
import DrawcardComponent from './drawcard.component';
import DrawcardTemplate from './drawcard.html';

describe('Drawcard', () => {
  let $rootScope, makeController;

  beforeEach(window.module(DrawcardModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new DrawcardController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(DrawcardTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = DrawcardComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(DrawcardTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(DrawcardController);
      });
  });
});
