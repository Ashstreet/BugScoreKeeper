'use strict';

/* Controllers */

var myApp = angular.module('myApp', []);

myApp.controller('EmployeeListCtrl', function($scope, $http) {
	var url = '../json/EmployeeData.json';

	$http({
		method: 'GET',
		url: url
	}).success(function (data) {
		$scope.employees = data;
	}).error(function (data) {
		console.log(data);
	});
	$scope.orderProp = 'id';
});
