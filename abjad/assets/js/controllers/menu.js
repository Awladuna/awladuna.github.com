function MenuCtrl ($scope) {

  function resizeElements () {
    // Resize and centert the menu
    var screenWidth = $(window).width()-10;
    var screenHeight = $(window).height()-40;
    var buttonSize = Math.min(screenWidth/2,screenHeight/3);
    $('.menu-column, .menu-column p, .menu-column p img').height(buttonSize).width(buttonSize);
    $('.main-content').css("padding-left", (screenWidth-2*buttonSize)/2);
  }

  $(function() {
    resizeElements();
    window.onresize = function () {
      resizeElements();
    }  
  });

  var snd = new Audio("assets/raw/click.ogg");
  snd.load();
  
  $scope.clickSound = function () {
    snd.play();
  }
}