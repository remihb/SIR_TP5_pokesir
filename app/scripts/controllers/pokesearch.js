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
    PokeFactory.pokemons.get().$promise
    .then(function(elem) {
        $scope.loading = false;
        $scope.pokemonList = elem.results;
    })
    .catch(function(error){
        $scope.loading = false;
        $log.warn(error);
        add_alert();
    })
    ;
    $scope.changePlaceholder = function(){
        $('.ui-select-search').attr('placeholder', 'Filter by name');
    };

    $scope.redirect = function(el){
        var id = el.url.split('/');
        $location.path("/pokemon/" + id[id.length - 2]);
    };
});
