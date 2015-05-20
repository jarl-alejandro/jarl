angular.module('Jarl')
    .controller('LogoutCtrl', function($auth){
        if(!$auth.isAuthenticated()){
            return;
        }
        $auth.logout()
        .then(function(){
           alert('salir')
        })
    })