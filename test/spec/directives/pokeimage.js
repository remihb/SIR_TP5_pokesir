'use strict';

describe('Directive: pokeimage', function () {

  // load the directive's module
  beforeEach(module('pokesirApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<-poke-image></-poke-image>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the PokeImage directive');
  }));
});
