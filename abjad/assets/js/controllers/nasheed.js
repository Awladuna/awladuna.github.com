function NasheedCtrl ($scope) {
  function resizeElements () {
    // Resize and centert the menu
    var screenWidth = $(window).width()-10;
    var screenHeight = $(window).height()-40;
    var buttonSize = Math.min(screenWidth/6,screenHeight/7);
    $('.grid-column, .grid-column p, .grid-column p img').height(buttonSize).width(buttonSize);
    $('.main-content').css("padding-left", (screenWidth-6*buttonSize)/2).css("height", 7*buttonSize+30);
    $('.play-column, .play-column p, .play-column p img').height(1.5*buttonSize).width(1.5*buttonSize);
    $('.play-column').css("padding-left", 2*buttonSize).css("bottom", 0);
  }

  $(function() {
    resizeElements();
    window.onresize = function () {
      resizeElements();
    }  
    // Hide all letters
    $(".grid-column img").hide();
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