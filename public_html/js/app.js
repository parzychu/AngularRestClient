/* App Module */

var angularClient = angular.module('angularClient', ['ngRoute', 'clientControllers']);

angularClient.config(['$routeProvider', function($routeProvider) {
        console.log("fsfs");
        $routeProvider.
                when('/server', {
                    templateUrl: 'partials/check-server.html',
                    controller: 'CheckAppCtrl'
                }).
                when('/notes', {
                    templateUrl: 'partials/notes.html',
                    controller: 'NoteListCtrl'
                }).
       /*         when('/notes/:noteId', {
                    templateUrl: 'partials/note-detail.html',
                    controller: 'NoteDetailCtrl'
                }).*/
                when('/notes/new', {
                    templateUrl: 'partials/new-note.html',
                    controller: 'NewNoteCtrl'
                }).
                otherwise({
                    redirectTo: '/notes'
                });
        console.log("f22sfs");
    }]);