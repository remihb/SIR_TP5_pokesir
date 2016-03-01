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
    $scope.loading = true;
    PokeFactory.pokemons.query().$promise
    .then(function(elem) {
        $scope.loading = false;
        $scope.pokemonList = elem;
    })
    .catch(function(error){
        $scope.loading = false;
        $log.warn(error);
    })
    ;
    $scope.changePlaceholder = function(){
        $('.ui-select-search').attr('placeholder', 'Filter by name');
    };

    $scope.redirect = function(el){
        var id = el.url.split('/');
        $location.path("/pokemon/" + id[id.length - 2]);
    };

    // $scope.$watch(function () {
    //     return PokeDataService.pokemon;
    // },
    // function(nv, old) {
    //     if (!_.isEmpty(nv) && nv.selected !== undefined){
    //         PokeFactory.request(nv.selected.url).get().$promise
    //         .then(function(poke){
    //             PokeDataService.pokeInfo = poke;
    //             $scope.pokemon.selected = undefined;
    //             $location.path("/pokemon/" + poke.id);
    //         })
    //         .catch(function(error){
    //             $log.warn(error);
    //         });
    //     }
    // }, true);
});
