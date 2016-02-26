'use strict';

describe('Controller: PokeSearchCtrl', function () {

  // load the controller's module
  beforeEach(module('pokesirApp'));

  var PokeSearchCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PokeSearchCtrl = $controller('PokeSearchCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PokeSearchCtrl.awesomeThings.length).toBe(3);
  });
});
