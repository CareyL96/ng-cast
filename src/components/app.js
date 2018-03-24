angular.module('video-player')

.component('app', {
  controller: function() {
    this.videos = exampleVideoData;
    this.currentVideo = exampleVideoData[0];
    this.onClick = (video) => {
      this.currentVideo = video;
    }
    
    this.selectVideo = () => {
      
    }
    
    this.searchResults = () => {
      
    }
    
  },
  templateUrl: "src/templates/app.html" 
});
