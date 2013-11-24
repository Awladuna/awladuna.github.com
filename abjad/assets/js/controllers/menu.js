function MenuCtrl ($scope) {

  var snd = new Audio("assets/raw/click.ogg");
  snd.load();
  
  $scope.clickSound = function () {
    snd.play();
  }
}