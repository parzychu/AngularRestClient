var clientDirectives = angular.module('clientDirectives', ['clientControllers']);
clientDirectives.directive('activeStar', function() {
    return function(scope, element, attrs) {
        if (scope.note.tag === true) {
            element.addClass("btn-warning active");
        }
        else {
            element.addClass("btn-default");
        }
    };
});

clientDirectives.directive("leave", function() {
    return function(scope, element, attrs) {
        element.bind("mouseleave", function() {
            if (scope.note.tag === false) {
                element.removeClass(attrs.enter);
            }
            else {
                element.addClass("active");
            }
        });
    };
});
clientDirectives.directive('star', function() {
            return {
                restrict: 'E',
                controller: 'StarCtrl',
                template: '<span ng-click="toggleTag(note)" enter="btn-warning" leave active-star class="btn glyphicon glyphicon-star toggle" ></span>'
            };
        });
clientDirectives.directive("toggleColor", function() {
    return {
        restrict: "A",
        link: function(scope, element, attrs) {
            element.bind("click", function() {
                $(element).toggle(function() {
                    console.log(jesrem);
                    element.css({'color': attrs.color});
                }, function() {
                    element.css({'color': 'grey'});
                });
            });
        }
    }
});
