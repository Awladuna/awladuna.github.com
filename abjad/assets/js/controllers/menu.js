function MenuCtrl ($scope) {
  $scope.clickSound = function () {
    var snd = new Audio("assets/raw/click.mp3");
    snd.play();
  }
}