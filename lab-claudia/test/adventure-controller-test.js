'use strict';

require('./lib/setup.js');

const angular = require('angular');

describe('testing ngAdventure', function() {
  describe('testing #GameHistoryController()', function() {
    beforeEach(() => {
      angular.mock.module('ngAdventure');
      angular.mock.inject($controller => {
        this.gameHistoryCtrl = new $controller('GameHistoryController');
      });
    });
    describe('testing initial properties', () => {
      it('should return history array', () => {
        expect(Array.isArray(this.gameHistoryCtrl.history)).toBe(true);
      });
    });
  });

  describe('testing #GamePadController()', function() {
    beforeEach(() => {
      angular.mock.module('ngAdventure');
      angular.mock.inject($controller => {
        this.gamePadCtrl = new $controller('GamePadController');
      });
    });
    describe('testing initial properties', () => {
      it('should return directions array', () => {
        expect(Array.isArray(this.gamePadCtrl.directions)).toBe(true);
      });
    });
  });
});
