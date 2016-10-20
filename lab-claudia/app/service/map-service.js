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
    A: {
      desc: 'You are in room A. There are two paths leaving this room. Good luck trolololo',
      south: 'C',
      east: 'B',
    },
    B: {
      desc: 'You are in room B. You cant see shit',
      south: 'D',
      west: 'A',
    },
    C: {
      desc: 'You are in room C. Maybe there is light to the north.',
      north: 'A',
      east: 'D',
    },
    D: {
      desc: 'You are in room D. You hear bird calls to the north.',

      north: 'B',
      west: 'C',
      south: 'X',
    },
    X: {
      desc: 'You are in room X. You are in quick sand. The birds laugh at your misfortune',
      south: 'X',
      north: 'X',
      east: 'X',
      west: 'A',
    },
  };

  //return service
  return service;
}
