'use strict';

describe('Service: pokeFactory', function () {

  // load the service's module
  beforeEach(module('pokesirApp'));

  // instantiate service
  var pokeFactory;
  beforeEach(inject(function (_pokeFactory_) {
    pokeFactory = _pokeFactory_;
  }));

  it('should do something', function () {
    expect(!!pokeFactory).toBe(true);
  });

});
