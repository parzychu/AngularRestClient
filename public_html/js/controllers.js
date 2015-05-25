
var clientControllers = angular.module('clientControllers', ['clientServices', 'clientFilters']);

clientControllers.controller('CheckAppCtrl', ['$scope', '$http', 'GetNoteList', function($scope, $http, GetNoteList) {
        console.log("jestem w CheckAppCtrl");
        var method = 'GET';
        var appUrl = './partials/plik.json';
        $scope.data = 'dddd';
        $scope.status = 'ddd';
        $scope.headers = 'dd';

        $scope.check = GetNoteList(method, appUrl, $scope);
  /*      $scope.check = function() {
            console.log("fsdaf");
            $http({method: 'GET', url: appUrl})
                    .success(function(data, status) {
                        $scope.data = data;
                        $scope.status = status;

                    }).
                    error(function(data, status) {
                        $scope.data = data || 'FATAL ERROR :P';
                        $scope.status = status;

                    });
        }
*/
    }]);

clientControllers.controller('NoteListCtrl', ['$scope', '$http', 'GetNoteList', function($scope, $http, GetNoteList) {
        console.log("jestem w NoteListCtrl");
        var method = 'GET';
        var appUrl = './partials/plik.json';
        $scope.data = '{}';
        $scope.status = '{}';
        $scope.headers = '{}';
        $scope.currentTab = 'partials/note-list.html';
        $scope.tags = ["wszystkie", "ważne", "dom", "praca", "inne"];   
          $scope.categories = ["wszystkie", "ważne", "dom", "praca", "inne"]; 
        $scope.check = GetNoteList(method, appUrl, $scope);
        $scope.notesTab = [];
        $scope.addTab = function(note){
            console.log($scope.notesTab);
            return $scope.notesTab.push(note);   
        };
        $scope.changeTab = function(url){
            $scope.currentTab = url;
        };
        $scope.removeTab = function(note){
           // console.log(jQuery(this).append('dasdgdagadfaafs'));
            $scope.currentTab = 'partials/note-list.html';
            $scope.notesTab.splice($scope.notesTab.indexOf(note),1);
            $window.location.reload();
            console.log($scope.notesTab.indexOf(note));
        }
   
    }]);

clientControllers.controller('NewNoteCtrl', ['$scope', '$http', 'GetNoteList', function($scope, $http, GetNoteList) {
        console.log("jestem w NewNoteCtrl");
        var method = 'POST';
        var appUrl = './partials/plik.json';
        $scope.data = '{}';
        $scope.status = '{}';
        $scope.headers = '{}';
        $scope.tags = ["wszystkie", "ważne", "dom", "praca", "inne"];   
        $scope.categories = ["wszystkie", "ważne", "dom", "praca", "inne"]; 
        //$scope.check = GetNoteList(method, appUrl, $scope);
    }]);

