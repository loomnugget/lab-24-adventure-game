'use strict';
//import sass
require('./_game-history.scss');

const angular = require('angular');
const ngAdventure = angular.module('ngAdventure');

// make a component
ngAdventure.component('gameHistory', { // sets tagname to <game-history></game-history>
  template: require('./game-history.html'), //tells it what template to use
  controller: 'GameHistoryController',
  controllerAs: 'gameHistoryCtrl',
});

ngAdventure.controller('GameHistoryController', ['$log', 'playerService', GameHistoryController]);
function GameHistoryController($log, playerService) {
  $log.debug('init gameHistoryCtrl');
  this.history = playerService.history; //gets ref to player service history
  //does ngrepeat on this when it changes
}
