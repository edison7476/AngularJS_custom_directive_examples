(function () {
  var app = angular.module('app');

  app.directive('isolateScopeWithStringDirective',function(){
    return {
      // Difine scope name and ppt for isolateScopeWithStringDirective
      // and use them as attibutes in html page
      scope: {
        name : '@', // this is one way binning to bind data from controller to the directive of isolateScopeWithStringDirective
        ppt: '@'
      },
      // setup a template to display scope in html page
      template: '<p> Name: {{ name }} </p> <p>Carrer Average PPG: {{ ppt }} </p>'
    };
  });
}());
