/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var clientServices = angular.module('clientServices', []);

clientServices.factory('GetNoteList', ['$http', function($http) {
        console.log("jestem w GetNoteList");
        return function(method, appUrl, scope) {
            $http({method: method, url: appUrl})
                    .success(function(data, status) {
                        scope.data = data;
                        scope.data = angular.fromJson(data);
                        console.log("czy otrzymane dane to Obiekt:" + angular.isObject(data));
                        console.log("czy otrzymane dane to Lista:" + angular.isArray(data));
                        scope.status = status;
                        scope.notes = data['notes'];
                    }).
                    error(function(data, status) {
                        scope.data = angular.fromJson(data);
                        scope.status = status || 404;

                    });
        };
    }]);
