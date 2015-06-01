/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var clientFilters = angular.module('clientFilters', []);

clientFilters.filter('searchNote', function(){
    return  function(items, search){
        var filtered = [];
       
        if(!search){ return items;}
        angular.forEach(items, function(item){
            if(angular.lowercase(item.title).indexOf(angular.lowercase(search)) !== -1  ||
                    angular.lowercase(item.description).indexOf(angular.lowercase(search))!== -1){
                filtered.push(item);
                console.log( angular.lowercase(item.title).indexOf(angular.lowercase(search))); 
            }
        });
        return filtered;
    }
});


