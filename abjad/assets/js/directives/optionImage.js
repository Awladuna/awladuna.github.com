AbjadApp.directive('optionImage', function() {
  return {
    link: function (scope, element) {
      var s = scope.optionImg + "";
      if (s.length < 2) s = "0" + s;
      element.attr('src', 'assets/img/letters/' + s + '.png');
      
      scope.checkAnswer = function () {
        if (scope.optionImg == scope.currentWord) {
          var snd = new Audio("assets/raw/success/" + Math.floor(Math.random() * 3) + ".ogg");
          snd.load();
          snd.play();
          scope.newChallenge();
        } else {
          var snd = new Audio("assets/raw/buzz.ogg");
          snd.load();
          snd.play();
        }
      }
    }
  };
});
