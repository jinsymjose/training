mainApp.controller('trainingDetailsController', ['$scope','$http','dataService','$state', '$stateParams','$filter','$rootScope',function($scope,$http,dataService,$state, $stateParams,$filter,$rootScope) {
   $scope.message = "This page will be used to update daily works";

dataService.getTrainingDetails().then(function(data) {
$scope.training_list1 = data;
 var index = $stateParams.index;
$scope.training = $filter('filter')($scope.training_list1, function (d) {return d.id === index})[0];

});

$scope.Add = function () {
      alert("clicked");
       }
}]);
