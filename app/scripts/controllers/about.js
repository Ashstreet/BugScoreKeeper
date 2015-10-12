'use strict';

/**
 * @ngdoc function
 * @name skillsTestApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the skillsTestApp
 */
angular.module('skillsTestApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
