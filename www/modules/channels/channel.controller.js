angular
  .module('app')
  .controller('ChannelController', ChannelController);

ChannelController.$inject = ['$scope', '$rootScope', '$route', '$routeParams', '$location', '$state', '$http', 'dataservice'];
 function ChannelController ($scope, $route, $routeParams, $location, $rootScope, $state, $window, $http, dataservice) {

  var Channel = this;

  channel.init = function () {
    console.log("ChannelController init");
  };

  channel.getData = function () {
    console.log("ChannelController get data");
  };

  channel.createChannelList = function () {
    console.log("use the data to create json array -> list of site's channels");
  };

  channel.populateChannelData = function () {
    console.log("now that we have our channels, filter our news by 'channel' value in object");
  };


  channel.init();
} //// @endChannelController