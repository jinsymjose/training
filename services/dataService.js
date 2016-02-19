mainApp.factory('dataService', [
		'$http',
		function($http) {
			return {
				getProjects : function() {
					return $http.get('partials/project_list.json').then(
							function(response) {
								return response.data;
							});
				},
				getTime : function() {
					return $http.get('partials/time_list.json').then(
							function(response) {
								return response.data;
							});
				},
				getMedium : function() {
					return $http.get('partials/medium.json').then(
							function(response) {
								return response.data;
							});
				},
				getVenue : function() {
					return $http.get('partials/venue.json').then(
							function(response) {
								return response.data;
							});
				},
				getActivities : function() {
					return $http.get('partials/activity_list.json').then(
							function(response) {
								return response.data;
							});
				},
				getStatusHistory : function() {
					return $http.get('partials/history.json').then(
							function(response) {
								return response.data;
							});
				},
				getHours : function() {
					var i = 0;
					var hours = [];
					for (i = 0; i < 25; i++) {
						hours.push({
							id : i,
							value : i
						});
					}
					return hours;
				},
				getMinutes : function() {
					var i = 0;
					var minutes = [];
					for (i = 0; i < 4; i++) {
						minutes.push({
							id : i,
							value : i * 15
						});
					}
					return minutes;
				},
				getDates : function() {
					var currentDate = new Date();
					var first = currentDate.getDate();
					var startDate = new Date(currentDate.setDate(first));
					startDate = startDate.getDate() + "-"
							+ (startDate.getMonth() + 1) + "-"
							+ +startDate.getFullYear();

					var i = 0;
					var dates = [];
					for (i = 0; i < 8; i++) {
						var last = first - i;
						var endDate = new Date(currentDate.setDate(last));
						endDate = endDate.getDate() + "-"
								+ (endDate.getMonth() + 1) + "-"
								+ endDate.getFullYear();

						dates.push({
							id : i,
							value : endDate,
							hour : 0,
							minute : 0
						});
					}
					return dates;
				},
				getTrainingList : function() {
					return $http.get('partials/training_details.json').then(
							function(response) {
								return response.data;
							});
				},
				getTrainingDetails : function() {
					return $http.get('partials/training_details.json').then(
							function(response) {
								return response.data;
							});
				}
			}
	} ]);
