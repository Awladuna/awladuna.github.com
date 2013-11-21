function LetterSongCtrl ($scope, $routeParams) {
  var letterLoop = false;
  var currentLetter = parseInt($routeParams.letter);
  var snd = null;
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

  if ($routeParams.letter == 'all') {
    letterLoop = true;
    currentLetter = 0;
  }
  
  function resizeElements () {
    // Resize and centert the menu
    var screenWidth = $(window).width()-10;
    var screenHeight = $(window).height()-40;
    var canvasSize = Math.min(screenWidth,screenHeight);
    $('.img-container').css('height',canvasSize).css('width',canvasSize).css('padding',0.125*canvasSize);
    $('.img-container img').css('height',0.75*canvasSize).css('width',0.75*canvasSize);
    $('.main-content').css("padding-left", (screenWidth-canvasSize)/2).css("height", canvasSize+30);
  }

  $(function() {
    resizeElements();
    window.onresize = function () {
      resizeElements();
    }  
  });

  function playLetter (letterID) {
    var letterString = letterID+"";
    if (letterString.length < 2) letterString = "0" + letterString;
    
    snd = new Audio("assets/raw/letter/" + letterString + ".ogg");
    snd.load();
    snd.play();
  
    // Fade in letter as the song plays
    snd.addEventListener("playing", function() {
      (function fadeLoop (i) {          
        setTimeout(function () {   
          $("#img").attr('src', 'assets/img/letter/' + letterString + '/' + i + '.png')
          if (++i < intervals[letterID].length) {
            fadeLoop(i);
          }
        }, intervals[letterID][i])
      })(0);
    });

    snd.addEventListener("ended", function() {
      if (letterLoop && letterID++ < 27){
        playLetter(letterID);
      }
      else {
        window.history.back();
      }
    });
  }
  
  playLetter(currentLetter);
  
  $scope.$on("$destroy", function(){
    snd.pause();
    snd = null;
  });
}