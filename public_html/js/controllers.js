
var clientControllers = angular.module('clientControllers', []);

clientControllers.controller('CheckAppCtrl', ['$scope', '$http', function($scope, $http){
        console.log("fasdfd");
	var appUrl = './partials/plik.json';
        $scope.data = 'dddd';
        $scope.status = 'ddd';
        $scope.headers = 'dd';
	
        $scope.check = function(){
                console.log("fsdaf");
		$http({method: 'GET', url: appUrl})
			.success(function(data, status){
				$scope.data = data;
				$scope.status = status;
				
			}).
			error(function(data, status){
				$scope.data = data || 'FATAL ERROR :P';
				$scope.status = status;
                               
			});
	}
}]);

