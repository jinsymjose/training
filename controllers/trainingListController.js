mainApp.controller('trainingListController',
	['$scope','$http','$location','$rootScope',
	'dataService','createTrainingService',
	function($scope, $http, $location, $rootScope,dataService, createTrainingService) {
		$scope.training = $rootScope.training_list;
		debugger;
	} ]);