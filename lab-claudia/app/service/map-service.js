'use strict';

const angular = require('angular');
const ngAdventure = angular.module('ngAdventure');

//factory is how you make a service
//since it is a setter, you have to pass in the array
ngAdventure.factory('mapService', ['$log', mapService]);

function mapService($log) {
  $log.debug('init mapService');
  //setup service
  let service = {};
  //add features to service - add properties
  service.mapData = {
    'Waterfall': {
      desc: 'You appear near a beautiful waterfall. Welcome to the dungeon of evil and treasure. Good luck trolololo',
      south: 'Lemon Candy',
      east: 'Goose Shrine',
    },
    'Goose Shrine': {
      desc: 'You walk by a goose shrine. Although you are put off by this weird sight, you smell treasure nearby and move onward',
      south: 'Bird Room',
      west: 'Waterfall',
    },
    'Lemon Candy': {
      desc: 'You are in a room full of lemon candy. Do you stop to eat it?',
      items: ['Lemon Candy', 'Hachet'],
      north: 'Waterfall',
      east: 'Bird Room',
    },
    'Bird Room': {
      desc: 'Why are there so many birds in this dungeon, you think to yourself? You hear bird calls to the north but keep focused on obtaining treasure.',
      items: ['Carrier pigeon'],
      north: 'Goose Shrine',
      west: 'Lemon Candy',
      south: 'Spider Pit',
    },
    'Nick Cage Commemeration Room': {
      desc: 'This is the best place ever!',
      items: ['Cardboard cutout of Nick Cage'],
      east: 'Nick Cage Commemeration Room',
      west: 'Nick Cage Commemeration Room',
      north: 'Nick Cage Commemeration Room',
      south: 'Darkness',
    },
    'Darkness': {
      desc: 'The treasure is getting closer.',
      east: 'Spider Pit',
      south: 'Treasure Forever',
      north: 'Nick Cage Commemeration Room',
    },
    'Treasure Forever': {
      desc: 'You found the treasure! But you notice the door sliding closed behind you. You are trapped here forever. The end.',
      north: 'Darkness',
    },
    'Spider Pit': {
      desc: 'You fall into a pit of spiders. Have fun escaping this one!',
      south: 'Spider Pit',
      north: 'Spider Pit',
      east: 'Spider Pit',
      west: 'Waterfall',
    },
  };

  //return service
  return service;
}
