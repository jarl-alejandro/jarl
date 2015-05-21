angular.module('Jarl')
    .controller('ProfileCtrl', function($scope, $auth, Account, PostResource) {
        $scope.getProfile = function(){
            Account.getProfile()
            .success(function(data){
                $scope.user = data
            })
            .error(function(err){
                alert(err)
            })
        }

        $scope.getProfile()
        $scope.posts = PostResource.query()
        console.log('alo')
    })