'use strict';

/* Controllers */

var myApp = angular.module('myApp', []);

myApp.controller('EmployeeListCtrl', function($scope) {
	$scope.employees = [
	{'name': 'Ashley Street',
	 'role': 'Interface Developer'},
	{'name': 'Gary Wong',
	 'role': 'Automation Tester'},
	 {'name': 'Nader Aoudin',
	  'role': 'Interface Developer'}
	];
});
