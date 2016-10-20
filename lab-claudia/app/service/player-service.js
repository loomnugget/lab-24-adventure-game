'use strict';

const angular = require('angular');
const ngAdventure = angular.module('ngAdventure');

//map service is injected into player service
//$q is promises for angular
ngAdventure.factory('playerService', ['$q', '$log', 'mapService', playerService]);

function playerService($q, $log, mapService) {
  $log.debug('init mapService');

  //setup service
  let service = {};

  //add features
  let turn = 0;
  let player = service.player = {
    name: 'slugneo',
    //where the player starts off
    location: 'A',
    hp: 16,
  };

  let history = service.history = [


  ];

  service.movePlayer = function(direction) {
    return new $q((resolve, reject) => {
      turn++;
      //the room that the player is in, as set in playerService() initially
      let currentLocation = player.location;
      //direction passed in is where the player tries to move
      //if the direction is an available spot to move, new location is set to that value
      let newLocation = mapService.mapData[currentLocation][direction];
      // if there is not a room in that direction, reject promise
      if (!newLocation) {
        history.unshift({
          turn,
          desc: 'you hit a wall',
          location: player.location,
          hp: player.hp,
        });
        console.log('history', history);
        return reject('No room in that direction!');
      }
      history.unshift({
        turn,
        location: player.location,
        desc: mapService.mapData[newLocation].desc,
        hp: player.hp,
      });
      console.log('history', history);
      player.location = newLocation;
      return resolve(player.location);
    });
  };
  //return service
  return service;
}
