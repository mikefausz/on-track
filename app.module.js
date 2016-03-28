angular
  .module('onTrack',['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: "templates/all.html",
        controller: 'MainController'
      })
      .when('/tracks', {
        templateUrl: "templates/tracks.html",
        controller: "MainController"
      })
      .when('/track/:id', {
        templateUrl: "templates/track.html",
        controller: "MainController"
      })
      .when('/track/:id/edit', {
        templateUrl: "templates/edit.html",
        controller: "MainController"
      });
  });
