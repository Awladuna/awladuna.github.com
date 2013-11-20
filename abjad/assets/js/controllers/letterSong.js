function LetterSongCtrl ($scope, $routeParams) {
  var currentLetter = parseInt($routeParams.letter);
  
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
  });
  
  var snd = new Audio("assets/raw/letter/" + $routeParams.letter + ".ogg");
  snd.load();
  snd.play();
  
  // Fade in letter as the song plays
  var i = 0;
  var intervals = [
      		[0,600,2300],
      		[0,600,2300],
      		[0,600,2300],
      		[0,600,800],
      		[0,660,1740],
      		[0,850,2000],
      		[0,780,1940],
      		[0,750,1850],
      		[0,950,2000],
      		[0,900,2000],
      		[0,920,1280],
      		[0,820,1940,1390],
      		[0,750,1750],
      		[0,900,1940],
      		[0,720,2000],
      		[0,780,1940],
      		[0,820,1880],
      		[0,850,1850],
      		[0,850,1850],
      		[0,850,1850],
      		[0,850,2050],
      		[0,800,1900,1300],
      		[0,750,2150],
      		[0,780,1870],
      		[0,900,2000],
      		[0,850,2000],
      		[0,750,1850],
      		[0,800,800]
      ];
  
  snd.addEventListener("playing", function() {
    (function fadeLoop (i) {          
      setTimeout(function () {   
        var s = i+"";
        if (s.length < 2) s = "0" + s;
        $("#img").attr('src', 'assets/img/letter/' + $routeParams.letter + '/' + i + '.png')
        if (++i < intervals[0].length) {
          fadeLoop(i);
        }
      }, intervals[currentLetter][i])
    })(0);
  });

  snd.addEventListener("ended", function() {
    window.history.back();
  });

  $scope.$on("$destroy", function(){
    snd.pause();
    snd = null;
  });
}