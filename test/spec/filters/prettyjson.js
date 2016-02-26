'use strict';

describe('Filter: prettyJSON', function () {

  // load the filter's module
  beforeEach(module('pokesirApp'));

  // initialize a new instance of the filter before each test
  var prettyJSON;
  beforeEach(inject(function ($filter) {
    prettyJSON = $filter('prettyJSON');
  }));

  it('should return the input prefixed with "prettyJSON filter:"', function () {
    var text = 'angularjs';
    expect(prettyJSON(text)).toBe('prettyJSON filter: ' + text);
  });

});
