angular.module('video-player')
.service('youTube', function($http){
  this.search = function(params, callback) {
    return $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      dataType: 'json',
      data: {
        key: params.key,
        q: params.query,
        part: 'snippet',
        embeddable: 'true',
        maxResults: params.max,
        type: 'video'
      }
    });
  }
});
