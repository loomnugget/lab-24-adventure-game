'use strict';
//import sass
require('./_player-info.scss');

const angular = require('angular');
const ngAdventure = angular.module('ngAdventure');

//every template gets registered with a name
ngAdventure.component('playerInfo', { //sets the tag to be <player-info></player-info>
  template: require('./player-info.html'),
  controller: 'PlayerInfoController',
  controllerAs: 'playerInfoCtrl',
});

ngAdventure.controller('PlayerInfoController', ['$log', 'playerService', PlayerInfoController]);
function PlayerInfoController($log, playerService) {
  //creates a reference to the service
  //if the service changes, all the info on this changes
  this.player = playerService.player;
}
