'use strict';

describe('Service: PokeEvol', function () {

  // load the service's module
  beforeEach(module('pokesirApp'));

  // instantiate service
  var PokeEvol;
  beforeEach(inject(function (_PokeEvol_) {
    PokeEvol = _PokeEvol_;
  }));

  it('should do something', function () {
    expect(!!PokeEvol).toBe(true);
  });

});
