mainApp.controller('createTrainingController',
	['$scope','$http','$location','$rootScope',
	'dataService','createTrainingService',
	function($scope, $http, $location, $rootScope,dataService, createTrainingService) {
		
		dataService.getTrainingList().then(function(data) {
			$rootScope.training_list = data;
		});
		dataService.getTime().then(function(data) {
			$scope.time_list = data;
		});
		dataService.getVenue().then(function(data) {
			$scope.venue = data;
		});
		dataService.getMedium().then(function(data) {
			$rootScope.medium = data;
		});
		/*dataService.gettrainingData().then(function(data) {
			$rootScope.trainingData= data;
		});*/
		$scope.training = $rootScope.training_details;
		// $scope.training = $rootScope.training_list;
		$scope.addItem = function(training) {

			var success = createTrainingService.saveTrainings(training);
				if(success){
					$location.path('/trainings').replace();
				};

		};



	} ]);
