AbjadApp.directive('rollImage', function() {
  return {
    link: function (scope, element) {
      scope.$watch('currentWord', function(value) {
        var s = value + "";
        if (s.length < 2) s = "0" + s;
        element.attr('src', 'assets/img/letter/' + s + '/1.png');
      });

      scope.playHint = function () {
        var s = scope.currentWord + "";
        if (s.length < 2) s = "0" + s;
        var snd = new Audio("assets/raw/letter/" + s + ".ogg");
        snd.load();
        snd.play();
      };
    }
  };
});
