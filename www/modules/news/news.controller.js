angular
  .module('app')
  .controller('NewsController', NewsController);

NewsController.$inject = ['$scope', '$rootScope', '$route', '$routeParams', '$location', '$state', '$http', 'dataservice'];
 function NewsController ($scope, $route, $routeParams, $location, $rootScope, $state, $window, $http, dataservice) {

  var news = this;

  news.init = function() {

  }

  news.getData = function() {

  }


  news.init();
} //// @endNewsController