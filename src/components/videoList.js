angular.module('video-player')
.component('videoList', {
  bindings: {
    videos: '<',
    onClick: '<',
    selectVideo: '<'
  },
  
  templateUrl: "src/templates/videoList.html" 
});
