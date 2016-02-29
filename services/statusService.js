mainApp.service('statusService', [
		'$rootScope',
		function($rootScope) {
			
			//Function to save the status

			this.saveStatus = function(statusData) {

				$rootScope.statusHistory.push({
					date : statusData.date.value,
					project : statusData.project.title,
					activity : statusData.activity.title,
					time : statusData.hour.value + ':'
							+ statusData.minute.value,
					description : statusData.description
				});
				return true;
			};

		} ]);
