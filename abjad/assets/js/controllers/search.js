AbjadApp.controller('SearchCtrl', function($scope) {
  $scope.optionsCount = 3
  
  $scope.newChallenge = function () {
    $scope.optionImgs = []

    while($scope.optionImgs.length < $scope.optionsCount){
      var randomnumber= Math.floor(Math.random() * 28);
      var found=false;
      for(var i=0; i < $scope.optionImgs.length; i++){
        if( $scope.optionImgs[i] == randomnumber ){
          found = true;
          break;
        }
      }
      if(!found) $scope.optionImgs[$scope.optionImgs.length] = randomnumber;
    }

    $scope.currentWord = $scope.optionImgs[Math.floor(Math.random() * $scope.optionImgs.length)];
  }
  
  $scope.newChallenge();
});
