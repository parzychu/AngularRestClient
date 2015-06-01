var clientServices = angular.module('clientServices', []);

clientServices.factory('ChceckServer', ['$http', function($http) {
        return function(appUrl, $scope) {
            $http({method: 'GET', url: appUrl})
                    .success(function(data, status) {
                        $scope.data = angular.fromJson(data);
                        $scope.status = status;
                    }).
                    error(function(data, status) {
                        $scope.data = angular.fromJson(data);
                        $scope.status = status || 404;

                    });
        };
    }]);

clientServices.service('Notes', ['Servers', function(Servers) {
        if (Servers.connected) {
            $http.get(Servers.currentServer)
                    .success(function(data) {
                        this.notes = data;
                    });
        }
        else {
            this.notes = [
                {
                    "category": "Cytat",
                    "description": "Rodzaj dlugowiecznych drzew nalezacy do podrodziny lipowatych. ",
                    "id": 1,
                    "tag": true,
                    "title": "Lipa"
                },
                {
                    "category": "Info",
                    "description": "Udomowiona forma wilka szarego, ssaka drapieznego z rodziny psowatych (Canidae), uznawana przez niektorych za podgatunek wilka.",
                    "id": 2,
                    "tag": false,
                    "title": "Pies"
                },
                {
                    "category": "Info",
                    "description": "Wpis z serii AntyTeka, więc odeślę Was w inne miejsce. Tym razem będzie to przegląd potknięć, wpadek czy wreszcie klęsk Steve’a Jobsa. Człowieka, o którym niektórzy powiedzą/napiszą, że nie zaliczał wpadek.",
                    "id": 3,
                    "tag": false,
                    "title": "Notatka2"
                },
                {
                    "category": "Jobs",
                    "description": "Parafrazując klasyka można napisać, że Steve Jobs wielkim biznesmenem był. "
                            + "Słów zachwytu nad osiągnięciami wizjonera z Cupertino padły już miliony: geniusz, doskonały strateg, świetny"
                            + "projektant, wybitny inżynier, wspaniały lider, CEO, jakiego świat nie widział. I już nie zobaczy. Nawet, jeśli \n"
                            + "uznamy, że to prawda, to o jednej rzeczy trzeba pamiętać: Jobs nie urodził się jednostką doskonałą. W trakcie swojej"
                            + "kariery zaliczył sporo wpadek i to m.in. dzięki nim zaszedł tak wysoko.",
                    "id": 4,
                    "tag": true,
                    "title": "Jobs"
                },
                {
                    "category": "Jobs",
                    "description": "To jednak mit i doskonale zdają sobie z tego sprawę osoby, które lepiej poznały biografię współzałożyciela Apple. Życie tego człowieka nie było usłane różami, nie składało się z etapów od jednego sukcesu do kolejnego i w dużej mierze wynikało to z błędów popełnianych przez Jobsa.",
                    "id": 5,
                    "tag": false,
                    "title": "Nowa"
                },
                {
                    "category": "Grzyby",
                    "description": "Agatka",
                    "id": 6,
                    "title": "Agatka"
                },
                {
                    "category": "Angular",
                    "description": "Converts the specified string to uppercase.",
                    "id": 7,
                    "tag": true,
                    "title": "uppercase"
                },
                {
                    "category": "Angular",
                    "description": "Determines if a reference is an Object. Unlike typeof in JavaScript, nulls are not considered to be objects. Note that JavaScript arrays are objects.",
                    "id": 8,
                    "tag": false,
                    "title": "isObject"
                },
            ];
        }
        this.lengh = function() {
            var n = 0;
            angular.forEach(this.notes, function(value, key) {
                n++;
            });
            return n;
        };
        this.addNewNote = function(note) {
            if (Servers.connected) {
                data = angular.toJson(note);
                $http.post(Servers.current + '/note', data)
                        .success(function(data) {
                            this.notes = data;
                        })
                        .error(function(data, status) {
                            console.log("Notes.addNote nieudane")
                        });
            }
            else {
                note.id = this.notes.lengh;
                this.notes.push(note);
            }
        };
        this.deleteNote = function(note) {
            if (Servers.connected) {
                $http.delete(Servers.current + '/note/' + note.id)
                        .success(function(data) {
                            this.notes = data;
                        })
                        .error(function(data, status) {
                            console.log("Notes.deleteNote nieudane")
                        });
            }
            else {
                var myKey;
                angular.forEach(this.notes, function(value, key) {
                    if (note === value) {
                        myKey = key;
                    }
                });
                console.log(myKey);
                this.notes.splice(myKey, 1);
            }
        };
        this.editNote = function(note) {
            if (Servers.connected) {
                var data = angular.toJson(note);
                $http.put(Servers.current + '/note/' + note.id, data)
                        .success(function(data) {
                            this.notes = data;
                        })
                        .error(function(data, status) {
                            console.log("Notes.editNote nieudane")
                        });
            }
            else {
                var myKey;
                angular.forEach(this.notes, function(value, key) {
                    if (note.id === value.id) {
                        myKey = key;
                    }
                });
                this.notes[myKey] = note;
            }
        };
    }]);

clientServices.service('Servers', function() {
    this.servers = [
        './partials/plik.json',
        'http://len.iem.pw.edu.pl/~parzysm1/apps/noteapp'
    ];
    this.current = 'http://len.iem.pw.edu.pl/~parzysm1/apps/noteapp';
    this.connected = false;
});

clientServices.service('Categories', ['Notes', function(Notes) {
        function category() {
            var categories = [];
            angular.forEach(Notes.notes, function(value, key) {
                //console.log(value.category +":" + key);
                if (categories.indexOf(value.category) === -1)
                    categories.push(value.category);
            });
            return categories;
        }
        this.categories = category();
        this.addNewCategory = function(category) {
            if (this.categories.indexOf(category) === -1)
                this.categories.push(category);
        };
    }]);