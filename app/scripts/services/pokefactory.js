/* jshint
laxcomma:true
, laxbreak:true
*/

'use strict';

/**
 * @ngdoc service
 * @name pokesirApp.pokeFactory
 * @description
 * # pokeFactory
 * Factory in the pokesirApp.
 */
angular.module('pokesirApp')
  .factory('pokeFactory', function($resource) {
      return {
          pokemons   : $resource('http://pokeapi.co/api/v2/pokemon/:id/')
      };
  });
