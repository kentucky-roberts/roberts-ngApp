angular
  .module('app')
    .controller('AppController', AppController);

AppController.$inject = ['$scope', '$rootScope', '$state', 'interval', 'timeout', '$http', 'ModalService', ];
function AppController($scope, $rootScope, $state, $window, $interval, $timeout, $http, $ModalService) {

  var app = this;

  $scope.initApp = function() {
    console.log("initializing application ...");
  };







  ////////////////////////////////////////
  // Modal Services
  ////////////////////////////////////////
  $scope.showNewPlayer = function() {
    ModalService
      .init('templates/modals/new-player.html', $scope)
      .then(function(modal) {
          modal.show();
      });
  };

  $scope.initApp();
} //// @endAppController