/* jshint
laxcomma:true
, laxbreak:true
, unused : false
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
.controller('PokeSearchCtrl',function($scope, $log, $location, PokeFactory, PokeDataService) {
    $scope.pokemon = PokeDataService.pokemon;
    $scope.pokemonList = PokeDataService.pokemonList;
    PokeFactory.pokemons.query().$promise
    .then(function(elem) {
        $scope.pokemonList = _.map(elem, function(el){
            return {
                name    : el.name
                , url    : el.url
            };
        });
    })
    .catch(function(error){
        $log.warn(error);
    })
    ;

    $scope.$watch(function () {
        return PokeDataService.pokemon;
    },
    function(nv, old) {
            if (!_.isEmpty(nv)){
            PokeFactory.request(nv.selected.url).get().$promise
            .then(function(poke){
                PokeDataService.pokeInfo = poke;
                $scope.pokemon.selected = undefined;
                $location.path("/pokemon/" + poke.id);
            })
            .catch(function(error){
                $log.warn(error);
            });
        }
    }, true);
});
