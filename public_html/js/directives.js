var clientDirectives = angular.module('clientDirectives', ['clientControllers']);
clientDirectives.directive("ngErrorMessage", function() {
    return function(scope, element, attrs) {
        element.text(scope.message + "" + attrs.message)
    }
})

clientDirectives.directive("enter", function() {
    return function(scope, element, attrs) {
        element.bind("mouseover", function() {
            console.log('jestem nad');
            element.addClass(attrs.enter);
        });
    };
});
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
                //       element.addClass('btn-default');
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
clientDirectives.directive("hideMe", function($animate) {
    return function(scope, element, attrs) {
        scope.$watch(attrs.hideMe, function(newVal) {
            if (newVal) {
                $animate.addClass(element, "fade");
            } else {
                $animate.removeClass(element, "fade");
            }
        });
    };
});

clientDirectives.animation(".toggle", function () {
    return {
        leave: function (element, done) {
            element.text("Nooooo!!!");
            TweenMax.to(element, 1, {opacity:1});
        },
        enter: function (element, done) {
            element.text("Yay, I'm alive!");
            TweenMax.from(element, 1, {opacity:0});
        }
    };
});