/* jshint
laxcomma:true
, laxbreak:true
*/

'use strict';

/**
 * @ngdoc service
 * @name pokesirApp.PokeFactory
 * @description
 * # PokeFactory
 * Factory in the pokesirApp.
 */
angular.module('pokesirApp')
  .factory('PokeFactory', function($resource) {
      var baseurl = "http://pokeapi.co/";
      return {
          pokemons  : $resource(baseurl + 'api/v2/pokemon/:id/')
          , request : function(url){
              return $resource(url);
          }
      };
  });
