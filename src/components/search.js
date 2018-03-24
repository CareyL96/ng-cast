angular.module('video-player')

.component('search', {
  bindings: {
    searchResults: '<',
    searchResults2: '<',
    result: '<'
  },
  
  templateUrl: "src/templates/search.html" 
});
