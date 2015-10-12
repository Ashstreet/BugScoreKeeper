'use strict';

/**
 * @ngdoc function
 * @name skillsTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the skillsTestApp
 */
angular.module('skillsTestApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
