/* jshint
laxcomma:true
, laxbreak:true
, unused : false
*/

'use strict';

/**
* @ngdoc function
* @name pokesirApp.controller:PokeInfosCtrl
* @description
* # PokeInfosCtrl
* Controller of the pokesirApp
*/
angular.module('pokesirApp')
.controller('PokeInfosCtrl', function($scope, $log, $location, PokeFactory, PokeDataService){
    $scope.pokeInfo = PokeDataService.pokeInfo;
});
