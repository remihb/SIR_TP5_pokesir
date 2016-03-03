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
.controller('PokeInfosCtrl', function($scope, $log, $routeParams, PokeFactory){
    $scope.loading = true;
    var id = $routeParams.id;
    PokeFactory.pokemons.get({id : id}).$promise
    .then(function(elem) {
        PokeFactory.pokemonsOther.get({id: id}).$promise
        .then(function(rest){
            $scope.loading = false;
            $scope.pokeInfo = {
                main :elem
                , rest : rest
            };
        })
        .catch(function(error){
            $scope.loading = false;
        })
        ;
    })
    .catch(function(error){
        $scope.loading = false;
        $log.warn(error);
    })
    ;
});
