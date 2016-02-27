/* jshint
laxcomma:true
, laxbreak:true
*/

'use strict';

/**
* @ngdoc function
* @name pokesirApp.controller:PokeSearchCtrl
* @description
* # PokeSearchCtrl
* Controller of the pokesirApp
*/
angular.module('pokesirApp')
.controller('PokeSearchCtrl',function($scope, pokeFactory) {
    $scope.pokemon = {};
    $scope.pokemonlist = {};
    pokeFactory.pokemons.query().$promise.then(function (elem) {
        $scope.pokemonlist = _.map(elem, function(el){
            var urlsplit = el.url.split('/');
            return {
                name    : el.name
                , id    : urlsplit[urlsplit.length - 2]
            };
        });
    })
    .catch(function(){
    })
    ;
});
