var myApp = angular.module('myApp');

myApp.directive('playerDirective', function (){
  return {
    restric:'AE',
    scope:{
      player:"="
    },
    replace:true,
    templateUrl: "directiveTemplates/playerDirective.html"
  };
});

myApp.directive('sortDirective', function (){
  return {
    restric: 'E',
    templateUrl:"directiveTemplates/sortDirective.html"
  };
});
