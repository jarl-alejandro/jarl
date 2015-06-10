angular.module('Jarl')
	.controller('postDetailCtrl', function($scope, $stateParams, Account, PostResource, socket, CommentResource){

        $scope.getProfile = function(){
            Account.getProfile()
            .success(function(data){
                $scope.user = data
            })
            .error(function(err){
                alert(err)
            })
        }

        //$scope.messages = []
        $scope.post = PostResource.get({ id:$stateParams.id });
        $scope.messages = CommentResource.query({ postId:$stateParams.id });
        $scope.getProfile();

        $scope.saveComment = function(){
            var message = {
                'comment': $scope.commentTxt,
                'user': $scope.user,
                'post': $scope.post
            }

            socket.emit('send::message', message)
            $scope.commentTxt = null
        }

        socket.on('get::message', function(data){
            $scope.messages.unshift(data)
            $scope.$digest()
        })
    })
