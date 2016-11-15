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


myApp.filter('percentage_symbol', function (){
  return function (num){
    return num + '%';
  };
});

myApp.filter('remove_', function (){
  return function (str){
    newStr = str.replace(/_/g, " ");
    return (newStr == 'Field Goal'|| newStr =='Field Goal 3PT'|| newStr =='Free Throw' )? newStr+'%' : newStr;
  };
});
