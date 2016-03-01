'use strict';

describe('Controller: PokeInfosCtrl', function () {

  // load the controller's module
  beforeEach(module('pokesirApp'));

  var PokeInfosCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PokeInfosCtrl = $controller('PokeInfosCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PokeInfosCtrl.awesomeThings.length).toBe(3);
  });
});
