angular.module('video-player')
.service('youTube', function($http){
  this.search = function(params, callback) {
    var results = $http({
      method : "GET",
      url: 'https://www.googleapis.com/youtube/v3/search',
      dataType: 'json',
      params: {
        key: params.key,
        q: params.query,
        part: 'snippet',
        embeddable: 'true',
        maxResults: params.max,
        type: 'video'
      }
    }).then(function(response) {
      callback(response.data.items);
    });
  }
  
  this.test = function(string) {
    console.log(string);
  }
});
