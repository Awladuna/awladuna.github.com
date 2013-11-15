function MenuCtrl ($scope) {
  var snd = new Audio("assets/raw/click.mp3");
  snd.load();

  $scope.clickSound = function () {
    snd.play();
  }
}