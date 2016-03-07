/* jshint
laxcomma:true
, laxbreak:true
, unused : false
, loopfunc: true
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
.controller('PokeInfosCtrl', function($scope, $log, $routeParams, PokeFactory, PokeEvol){
    $scope.loading = true;
    var id = $routeParams.id;
    PokeFactory.pokemons.get({id : id}).$promise
    .then(function(elem) {
        PokeFactory.pokemonsOther.get({id: id}).$promise
        .then(function(rest){
            if (rest.evolution_chain !== undefined){
                PokeFactory.request(rest.evolution_chain.url).get().$promise
                .then(function(evol){
                    $scope.loading = false;
                    var evolChain = [];
                    PokeEvol(evol.chain, evolChain);
                    $scope.pokeInfo = {
                        main :elem
                        , rest : rest
                        , evolChain : evolChain
                    };

                })
                .catch(function(error){
                    $scope.loading = false;
                    add_alert();
                    $log.warn(error);
                })
                ;
            }
            else {
                $scope.loading = false;
                $scope.pokeInfo = {
                    main :elem
                    , rest : rest
                };
            }
        })
        .catch(function(error){
            $scope.loading = false;
            add_alert();
            $log.warn(error);
        })
        ;
    })
    .catch(function(error){
        $log.info("poke : " + $scope.pokeInfo);
        $scope.loading = false;
        add_alert();
        $log.warn(error);
    })
    ;
});
