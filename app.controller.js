angular
  .module('onTrack')

  .controller('MainController', function($scope, $location, TrackService, $routeParams) {
    TrackService.getTracks().then(function(data) {
      $scope.posts = data.data;
    });
    $scope.addTrack = function(track) {
      TrackService.addTrack(track).then(function(data){
        $scope.posts.unshift(data.data);
      });
    };
    $scope.editTrack = function(trackId, track) {
      TrackService.editTrack(trackId, track).then(function(tracksArr){
        $scope.posts.unshift(tracksArr.data);
      });
    };
    $scope.deleteTrack = function(trackId) {
      TrackService.deleteTrack(trackId).then(function(data){
        window.glob = data;
        console.log(data);
      });
    };
    if($routeParams.id) {
      TrackService.getTrack($routeParams.id).then(function(track) {
        $scope.track = track.data;
      });

    }
  })

  .controller('FavoriteController', function($scope) {
    $scope.posts = [
    {'title': 'Back to Back Freestyle',
     'artist': 'Drake',
     'date': '7 months ago',
     'id': '216846955',
     'url': 'octobersveryown/drake-back-to-back-freestyle',
     'favorite': true,
     'comment': 'Fucking sick',
    },
    {'title': '30 Hours',
     'artist': 'Kanye West',
     'date': '1 month ago',
     'url': 'kanyewest/30-hours',
     'favorite': false,
     'comment': 'Blah blah blah blah',
    },
    {'title': 'Low Life [Prod. By Metro Boomin & Ben Billions]',
     'artist': 'Future + The Weeknd',
     'date': '1 month ago',
     'url': 'metroboomin/future-the-weeknd-low-life-prod-by-metro-boomin-ben-billions',
     'favorite': true,
     'comment': 'Reppin for that low life',
    },
  ];

});
