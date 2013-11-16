function NasheedCtrl ($scope) {
  var snd = new Audio("assets/raw/horoof.mp3");
  snd.load();
  snd.play();
  $scope.$on("$destroy", function(){
    snd.pause();
    snd = null;
  });
}