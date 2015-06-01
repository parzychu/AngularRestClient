var clientProviders = angular.module('clientProviders', []);
clientProviders.provider('Post', function() {
    this.$get = ['$resource', function($resource) {
      var Post = $resource('http://localhost:3000/api/post/:_id', {}, {
        update: {
          method: 'PUT'
        }
      })

      return Post;
    }];
  }); 

