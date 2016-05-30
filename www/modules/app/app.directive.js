angular
 .module('app.directive', [])
  .directive('appDirective', function() {
    return {
      restrict: 'E',
      templateUrl: 'templates/app/app.directive.html',
      controller: 'AppController',
      controllerAs: 'app',
      bindToController: true
  };

  // .directive('noScroll', function($document) {
  //   return {
  //     restrict: 'A',
  //     link: function($scope, $element, $attr) {
  //       $document.on('touchmove', function(e) {
  //         e.preventDefault();
  //       });
  //     }
  //   };
  // })

});
