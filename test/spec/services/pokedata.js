'use strict';

describe('Service: PokeDataService', function () {

  // load the service's module
  beforeEach(module('pokesirApp'));

  // instantiate service
  var PokeDataService;
  beforeEach(inject(function (_PokeInfo_) {
    PokeDataService = _PokeInfo_;
  }));

  it('should do something', function () {
    expect(!!PokeDataService).toBe(true);
  });

});
