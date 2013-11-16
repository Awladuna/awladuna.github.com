function MenuCtrl ($scope) {
  // Resize and centert the menu
  $(function() {
    var screenWidth = $(window).width()-10;
    var screenHeight = $(window).height()-40;
    var buttonSize = Math.min(screenWidth/2,screenHeight/3);
    $('.menu-column, .menu-column p, .menu-column p img').height(buttonSize).width(buttonSize);
    $('.container').css("margin-left", (screenWidth-2*buttonSize)/2);
  });

  var snd = new Audio("assets/raw/click.ogg");
  snd.load();
  
  $scope.clickSound = function () {
    snd.play();
  }
}