/* App Module */

var angularClient = angular.module('angularClient', ['ngRoute', 'clientControllers']);

angularClient.config(['$routeProvider', function($routeProvider) {
        console.log("fsfs");
  $routeProvider.
  when('/', {
      templateUrl: 'partials/checkServer.html',
      controller: 'CheckAppCtrl'
  }).
 when('/notes', {
    templateUrl: 'partials/test.html',
    controller: 'NoteListCtrl'
  }).
/*  when('/notes/:noteId', {
    templateUrl: 'partials/phone-detail.html',
    controller: 'NoteDetailCtrl'
  }).
  when('/notes/new', {
    templateUrl: 'partials/new-note.html',
    controller: 'NewNoteCtrl'
  }).
  */
  otherwise({
    redirectTo: '/'
  });
  console.log("f22sfs");
}]);