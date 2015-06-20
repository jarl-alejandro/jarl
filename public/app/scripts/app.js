angular.module("Jarl", ['ngResource', 'ui.router', 'satellizer'])
	.config(function($stateProvider, $urlRouterProvider, $authProvider){
		//$locationProvider.html5Mode(true);
		$stateProvider
			.state('home', {
				url: "/",
				templateUrl: "app/templates/home.html"
			})
			.state('login', {
				url: "/login",
				templateUrl: "app/templates/login.html",
				controller: "LoginCtrl"
			})
			.state('signup', {
		        url: '/signup',
		        templateUrl: 'app/templates/signup.html',
		        controller: 'SignupCtrl'
		      })
	      	.state('logout', {
	      		url: '/logout',
	      		templateUrl: null,
	      		controller: 'LogoutCtrl'
	      	})
	      	.state('profile', {
	      		url: "/profile",
	      		templateUrl: "app/templates/profile.html",
	      		controller: "ProfileCtrl"
	      	})
	      	.state('newPost', {
	      		url: "/new",
	      		templateUrl: "app/templates/newPost.html",
	      		controller: "newPostCtrl"
	      	})
	      	.state('post', {
	      		url: "/post/:id",
	      		templateUrl: "app/templates/postDetail.html",
	      		controller: "postDetailCtrl"
	      	})
	})
