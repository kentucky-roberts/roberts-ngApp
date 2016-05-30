angular
  .module('app', [
    'app.config',
    'app.animations',
    'app.directive',
    'app.service',
    'app.controller',
    'app.filters'
  ])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('tab', {
          url: '/tab',
          abstract: true,
          templateUrl: 'templates/tabs.html'
      })
      .state('tab.players', {
        url: '/players',
        views: {
          'tab-players': {
            cache: false,
            templateUrl: 'templates/players/players.html',
            controller: 'GameController',
            controllerAs: 'game'
          }
        }
      })
      .state('tab.splash-screen', {
        url: '/splash-screen',
        views: {
          'tab-splash-screen': {
            cache: false,
            templateUrl: 'templates/splash-screen/splash-screen.html'
          }
        }
      });

     $urlRouterProvider.otherwise('/tab/game');

  });
// angular
