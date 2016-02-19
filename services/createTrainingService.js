mainApp.service('createTrainingService', [
		'$rootScope',
		function($rootScope) {
			this.saveTrainings = function(trainings) {
	$rootScope.training_list.push({

					id : $rootScope.training_list.length+1,
					topic : trainings.topic.title,
					//Who : trainings.Trainings.Who.title,
					startTime : trainings.startTime.title,
					endTime : trainings.endTime.title,
					medium : trainings.medium.title,
					where : trainings.venue.title,
					seats : trainings.seats,
					description : trainings.description,
					//Invitation : trainings.Trainings.Invitation.name.title,
					//Seats : trainings.Trainings.Seats.value
				});
console.log($rootScope.training_list);
				return true;
			};
}]);
