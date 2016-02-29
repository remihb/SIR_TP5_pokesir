/* jshint
laxcomma:true
, laxbreak:true
, unused : false
*/

'use strict';

/**
 * @ngdoc service
 * @name pokesirApp.PokeDataService
 * @description
 * # PokeDataService
 * Service in the pokesirApp.
 */
angular.module('pokesirApp')
  .service('PokeDataService', function () {
    return {
        pokemonList : null
        , pokemon : {}
        , pokeInfo : {}
    };
  });
