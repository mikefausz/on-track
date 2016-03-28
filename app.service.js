angular
  .module('onTrack')
  .service('TrackService', function($http) {

    var url = 'http://tiny-tiny.herokuapp.com/collections/ontrack';

    function getTracks() {
      return $http.get(url);
    }

    function getTrack(id) {
      return $http.get(url + '/' + id);
    }

    function addTrack(track) {
      return $http.post(url, track);
    }

    function editTrack(track) {
      return $http.put(url + '/' + track._id, track);
    }

    function deleteTrack(trackId) {
      return $http.delete(url + '/' + trackId);
    }

    return {
      getTracks: getTracks,
      getTrack: getTrack,
      addTrack: addTrack,
      editTrack: editTrack,
      deleteTrack: deleteTrack
    };

  });
