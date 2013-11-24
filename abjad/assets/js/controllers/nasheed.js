function NasheedCtrl ($scope) {
  $(function() {
    // Hide all letters
    $(".grid-column img, .play-button").hide();
  });

  var snd = new Audio("assets/raw/horoof.ogg");
  snd.load();
  snd.play();
  
  // Fade in letter as the song plays
  var i = 0;
  var intervals = [2550,600,650,650,600,600,650,700,650,650,650,650,650,600,650,650,350,350,700,550,700,550,600,600,600,600,700,650,1500];
  var timer = null;
  snd.addEventListener("playing", function() {
    // Replace the current URL
    window.history.replaceState({},"", "#/letters");

    (function fadeLoop (i) {          
      timer = setTimeout(function () {   
        var s = i+"";
        if (s.length < 2) s = "0" + s;
        $("#img" + s).fadeIn();
        if (++i <= intervals.length) {
          fadeLoop(i);
        }
      }, intervals[i])
    })(0);
  });
  
  $scope.$on("$destroy", function(){
    snd.pause();
    snd = null;
    clearTimeout(timer);
  });
}