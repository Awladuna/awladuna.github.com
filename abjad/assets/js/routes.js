angular.module('abjadApp', [])
	.config(abjadRouter);

function abjadRouter ($routeProvider) {
	$routeProvider
	.when('/', {
    templateUrl: 'partials/menu.html',
    controller: 'MenuCtrl'
  });
}