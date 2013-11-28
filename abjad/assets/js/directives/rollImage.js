AbjadApp.directive('rollImage', function() {
  return {
    link: function (scope, element) {
      scope.$watch('currentWord', function(value) {
        var s = value + "";
        if (s.length < 2) s = "0" + s;
        element.attr('src', 'assets/img/letter/' + s + '/1.png');
      });
    }
  };
});
