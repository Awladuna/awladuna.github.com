angular.module('abjadApp', [])
	.config(abjadRouter);

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
  });
  
}