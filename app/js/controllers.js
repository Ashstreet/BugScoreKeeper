'use strict';

/* Controllers */

var myApp = angular.module('myApp', []);

myApp.controller('EmployeeListCtrl', function($scope) {
	$scope.employees = [
	{'name': 'Ashley Street',
	 'role': 'Interface Developer',
	 'level': 'Graduate',
	 'department':'Technology'},
	{'name': 'Gary Wong',
	 'role': 'Automation Tester',
	 'level': 'Midweight',
	 'department': 'Technology'},
	 {'name': 'Nader Aoudin',
	  'role': 'Interface Developer',
	  'level': 'Senior',
	  'department': 'Technology'}
	];
});
