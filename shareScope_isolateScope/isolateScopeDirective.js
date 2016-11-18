(function () {
  var app = angular.module('app');

  app.directive('isolateScope',function(){
    return {
      scope: { },
      template: '<p> Name: {{ player.name }} </p> <p>Carrer Average PPG: {{ player.ppt }} </p>'
    };
  });
}());
