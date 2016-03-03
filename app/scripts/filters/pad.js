'use strict';

/**
* @ngdoc filter
* @name pokesirApp.filter:pad
* @function
* @description
* # pad
* Filter in the pokesirApp.
*/
angular.module('pokesirApp')
.filter('pad', function () {
    return function pad(str, max) {
        if (str === undefined){
            return null;
        }
        else {
            max = (max === undefined) ? 5 : max;
            str = str.toString();
            return str.length < max ? pad("0" + str, max) : str;
            }
    };
});
