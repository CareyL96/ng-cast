angular.module('video-player')

.component('app', {
  controller: function(youTube) {
    var context = this;
    this.videos = exampleVideoData
    this.currentVideo = exampleVideoData[0]
    
    this.$postLink = function () {
      this.searchResults('puppies');
    }
    
    this.selectVideo = (video) => {
      this.currentVideo = video;
    }
    
    this.searchResults = (query) => {
      var params = {
        key: window.YOUTUBE_API_KEY,
        query: query,
        max: 5
      }
      
      youTube.search(params, function(data) {
        
        context.currentVideo = data[0];
        context.videos = data
      });
    }
    
    this.searchResults2 = (query) => {
      var params = {
        key: window.YOUTUBE_API_KEY,
        query: query,
        max: 5
      }
      
      youTube.search(params, function(data) {
        context.videos = data
      });
    }
  },
  templateUrl: "src/templates/app.html" 
});
