angular.module("Jarl", ['ngResource', 'ngMessages', 'ui.router', 'mgcrea.ngStrap', 'satellizer'])
	.config(function($stateProvider, $urlRouterProvider, $authProvider){
		$stateProvider
			.state('home', {
				url: "/",
				templateUrl: "templates/home.html"
			})
			.state('login', {
				url: "/login",
				templateUrl: "templates/login.html",
				controller: "LoginCtrl"
			})
			.state('signup', {
		        url: '/signup',
		        templateUrl: 'templates/signup.html',
		        controller: 'SignupCtrl'
		      })
	      	.state('logout', {
	      		url: '/logout',
	      		templateUrl: null,
	      		controller: 'LogoutCtrl'
	      	})
	      	.state('profile', {
	      		url: "/profile",
	      		templateUrl: "templates/profile.html",
	      		controller: "ProfileCtrl"
	      	})
	      	.state('newPost', {
	      		url: "/new",
	      		templateUrl: "templates/newPost.html",
	      		controller: "newPostCtrl"
	      	})
	})