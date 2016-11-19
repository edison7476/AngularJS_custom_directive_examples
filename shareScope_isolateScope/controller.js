var app = angular.module('app', []);
app.controller('myController', function($scope){

  $scope.player = {
    'name': 'Allen Iverson',
    'ppt': 26.7
  };

  $scope.changePlayer = function (){
    $scope.player = {
      'name': 'Stephen Curry',
      'ppt': 22.5
    };
  };
});
