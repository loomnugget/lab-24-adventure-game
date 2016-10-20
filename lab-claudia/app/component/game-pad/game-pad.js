'use strict';

const angular = require('angular');
const ngAdventure = angular.module('ngAdventure');

// make a component
ngAdventure.component('gamePad', { // sets tagname to <game-pad></game-pad>
  template: require('./game-pad.html'), //tells it what template to use
  controller: 'GamePadController',
  controllerAs: 'gamePadCtrl',
});

ngAdventure.controller('GamePadController', ['$log', 'playerService', GamePadController]);
function GamePadController($log, playerService) {
  $log.debug('init gamePadCtrl');

  //this configures the select menu - removes potential for some user error
  this.directions = ['north', 'south', 'east', 'west'];
  this.moveDirection = this.directions[0];

  this.movePlayer = function() {
    playerService.movePlayer(this.moveDirection)
    .then( location => {
      $log.log(`Player at new location: ${location}`);
    })
    // if room doesn't exist, catches error
    .catch(err => {
      $log.error(err);
    });
  };
}
