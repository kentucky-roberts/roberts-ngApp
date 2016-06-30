angular
  .module('app')
  .controller('AppController', AppController);

AppController.$inject = ['$scope', '$rootScope', '$route', '$routeParams', '$location', '$state', '$http', 'dataservice'];
function AppController ($scope, $route, $routeParams, $location, $rootScope, $state, $window, $http, dataservice) {

  var app = this;

  app.data_types = [];

  app.init = function() {
    console.log("initializing application ...");

    activate();  // get da data

    function activate() {
      return getData().then(function() {
        console.log("... returning data", app.data_types);
        app.start(app.data_types);  // put da data into da app
      });
    }

    function getData() {
      return dataservice.getData()
        .then(function(data) {
          app.data_types = data;
          //console.log(app.data_types);
          return app.data_types;
        });
    }
  };

  app.start = function(data_types) {
    app.data_types = data_types;
    //console.log(app.data_types);
    app.greeting = "Hello and welcome to our app";
  };








  ////////////////////////////////////////
  // Modal Services
  ////////////////////////////////////////
  // $scope.showNewPlayer = function() {
  //   ModalService
  //     .init('templates/modals/new-player.html', $scope)
  //     .then(function(modal) {
  //         modal.show();
  //     });
  // };

  app.init();
}; //// @endAppController