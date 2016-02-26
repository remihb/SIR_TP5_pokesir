'use strict';

/**
* @ngdoc filter
* @name pokesirApp.filter:prettyJSON
* @function
* @description
* # prettyJSON
* Filter in the pokesirApp.
*/
angular.module('pokesirApp')
.filter('prettyJSON', function () {
    return function(json) {
        return JSON ? JSON.stringify(json, null, 4) : 'your browser doesnt support JSON so cant pretty print';
    };
});
