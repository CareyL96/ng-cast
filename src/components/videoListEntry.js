angular.module('video-player')
.component('videoListEntry', {
  bindings: {
    video: '<',
    onClick: '<',
    selectVideo: '<'
  },
  controller: function() {
  },
  templateUrl: "src/templates/videoListEntry.html" 
});
