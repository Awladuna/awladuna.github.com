AbjadApp = angular.module('AbjadApp', []);

function abjadRouter ($routeProvider) {
	$routeProvider
	.when('/', {
    templateUrl: 'partials/menu.html',
    controller: 'MenuCtrl'
  })
	.when('/nasheed', {
    templateUrl: 'partials/letters.html',
    controller: 'NasheedCtrl'
  })
	.when('/letters', {
    templateUrl: 'partials/letters.html',
    controller: 'LettersCtrl'
  })
	.when('/letter/:letter', {
	 templateUrl: 'partials/letterSong.html',
	 controller: 'LetterSongCtrl'
	})
	.when('/search', {
    templateUrl: 'partials/search.html',
    controller: 'SearchCtrl'
  });
}

AbjadApp.config(abjadRouter);
