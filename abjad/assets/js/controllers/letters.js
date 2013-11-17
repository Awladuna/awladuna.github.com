function LettersCtrl ($scope) {
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
  
}