angular.module('Jarl')
    .factory('Account', function($http){
        return{
            getProfile: function(){
                return $http.get('/api/me')
            },
        }
    })