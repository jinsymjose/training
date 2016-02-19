mainApp.service('createTrainingService', [
		'$rootScope',
		function($rootScope) {
			this.saveTrainings = function(trainings) {

				$rootScope.trainingData.push({

					Training_id : trainings.Trainings.Training_id.value,
					Topic : trainings.Trainings.Topic.title,
					Who : trainings.Trainings.Who.title,
					StartTime : trainings.Trainings.StartTime.value,
					EndTime : trainings.Trainings.EndTime.title,
					Where : trainings.Trainings.Where.title,
					Seats : trainings.Trainings.Seats.value,
					Description : trainings.Trainings.Description.description,
					Invitation : trainings.Trainings.Invitation.name.title,
					Seats : trainings.Trainings.Seats.value
				});
				return true;
			};
}]);