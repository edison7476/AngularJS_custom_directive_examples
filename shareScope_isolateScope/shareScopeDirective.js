(function () {
  var app = angular.module('app');

  app.directive('shareScope',function(){
    return {
      template: '<p> Name: {{ player.name }} </p> <p>Carrer Average PPT: {{ player.ppt }} </p>'
    };
  });
}());
