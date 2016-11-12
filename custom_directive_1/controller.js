var myApp = angular.module('myApp',['ngAnimate']);

myApp.controller('myController', function ($scope, $http){

  $scope.condition = 'name';
  $scope.reverse = false;

  $scope.sortBy = function (condition){
    $scope.condition = condition;
    condition != 'name' ? $scope.reverse = true : $scope.reverse = false;
    // console.log($scope.condition );
  };

  $http.get('data/players.json').then(function (response){
    $scope.players = response.data;
  });

});

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

myApp.filter('percentage_symbol', function (){
  return function (num){
    return num + '%';
  };
});
