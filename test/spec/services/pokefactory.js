'use strict';

describe('Service: PokeFactory', function () {

  // load the service's module
  beforeEach(module('pokesirApp'));

  // instantiate service
  var PokeFactory;
  beforeEach(inject(function (_pokeFactory_) {
    PokeFactory = _pokeFactory_;
  }));

  it('should do something', function () {
    expect(!!PokeFactory).toBe(true);
  });

});
