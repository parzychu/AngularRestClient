
var clientControllers = angular.module('clientControllers', ['clientServices', 'clientFilters', 'clientDirectives']);

clientControllers.controller('NoteListCtrl', ['$scope', '$http', 'Notes', 'Categories', function($scope, $http, Notes, Categories) {
        $scope.notes = Notes.notes;
        $scope.categories = Categories.categories;

        $scope.deleteNote = function(note){
            Notes.deleteNote(note);
        };
        /*
        $scope.previousDisabled = true;
        $scope.limit = 20;
        $scope.page = 0;
        $scope.begin = $scope.limit * $scope.page;
        $scope.pageArray = function(){
            return new Array(Math.ceil(Notes.lengh()/$scope.limit));
        };
        $scope.setPage = function(index){
            $scope.page = index;
        };
        $scope.nextPage = function(){
            $scope.page++;
        };
        $scope.previousPage = function(){
            $scope.page--;
            if($scope.page === 0)$scope.previousDisabled = true;
            else $scope.previousDisabled = false;
        }
        */   
    }]);
clientControllers.controller('StarCtrl', ['Notes', '$scope', function(Notes, $scope){
        $scope.toggleTag = function(note){
            note.tag = !note.tag;
            Notes.editNote(note);
        };
}]);
clientControllers.controller('TabCtrl', ['$scope', '$timeout', 'Notes', function($scope, $timeout, Notes) {
        $scope.notesTab = [];
        $scope.importantTab = '!!';
        $scope.currentUrl = 'partials/note-list.html';
        $scope.currentTab = '-1';
        $scope.currentNote = '';

        var setIfImportantTab = function(data) {
            $scope.importantTab = data;
        };
        $scope.setIfImportantTab = setIfImportantTab;

        var addTab = function(note) {
            $scope.currentUrl = 'partials/note-edit.html';
            $scope.currentTab = note.id;
            $scope.currentNote = angular.copy(note);
            if ($scope.notesTab.indexOf(note) === -1)
                return $scope.notesTab.push($scope.currentNote);
        };
        $scope.addTab = addTab;

        var setCurrentTab = function(id, url) {
            console.log(id + "\n" + url);
            $scope.currentUrl = url;
            $scope.currentTab = id;
        };
        $scope.setCurrentTab = setCurrentTab;

        var setCurrentNote = function(note) {
            $scope.currentNote = note;
        };
        $scope.setCurrentNote = setCurrentNote;

        var isCurrentTab = function(id) {
            // console.log(id);
            return id === $scope.currentTab;
        };
        $scope.isCurrentTab = isCurrentTab;

        var removeTab = function(note) {
           $timeout(function(){
            $scope.notesTab.splice($scope.notesTab.indexOf(note), 1);
            setCurrentTab('-1', 'partials/note-list.html');
            }, 10);
        };
        $scope.removeTab = removeTab;
        
        $scope.editNote = function(note){          
            Notes.editNote(note);
            removeTab();
        };
        
       
    }]);

clientControllers.controller('CategoryCtrl', ['$scope', function($scope) {
        $scope.currentCategory = '!!';
        function setCurrentCategory(category) {
            console.log(category);
            return $scope.currentCategory = category;
        }
        $scope.setCurrentCategory = setCurrentCategory;
        function isCurrentCategoryNull() {
            return $scope.currentCategory === '!!';
        }
        $scope.isCurrentCategoryNull = isCurrentCategoryNull;
        function isCurrentCategory(category) {
            return $scope.currentCategory !== null && category === $scope.currentCategory;
        }
        $scope.isCurrentCategory = isCurrentCategory;
    }]);

clientControllers.controller('NewNoteCtrl', ['$scope', '$location', 'Categories', 'Notes', function($scope, $location, Categories, Notes) {
        var resetForm = function() {
            $scope.newNote = {
                title: '',
                description: '',
                category: '',
                tag: false
            };
        };
        $scope.categories = Categories.categories;

        $scope.addNewNote = function(newNote) {
            Notes.addNewNote(newNote);
            resetForm();
        };
        $scope.addNewCategory = function(category) {
            Categories.addNewCategory(category);
            $scope.addCategoryInput = false;
            $scope.newCategory = '';
        };
        $scope.cancel = function() {
            $location.path('/notes');
        };
    }]);

clientControllers.controller('CheckServerCtrl', ['$scope', '$http', 'ChceckServer', 'Servers', function($scope, $http, CheckServer, Servers) {
        var method = 'GET';
        $scope.selected = 'http://len.iem.pw.edu.pl/~parzysm1/apps/noteapp';
        $scope.status = '?';
        $scope.servers = Servers.servers;
        var check = CheckServer;
        $scope.checkServer = function(){
            console.log($scope.selected);
            check($scope.selected, $scope);
        };
    }]);
