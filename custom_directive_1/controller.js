var myApp = angular.module('myApp',[]);

myApp.controller('myController', function ($scope){

  $scope.condition = 'name';

  $scope.sortBy = function (condition){
    $scope.condition = condition;
    console.log($scope.condition );
  };

  $scope.players = [
      {name:"Allen Iverson", img:"iverson.jpeg",careerAvgPts:26.7},
      {name:"Kyrie Irving", img:"irving.jpeg", careerAvgPts:20.8 },
      {name:"Stephen Curry", img:"curry.jpeg", careerAvgPts:22.5 },
      {name:"Kobe Bryat", img:"kobe.jpeg", careerAvgPts:25.0},
      {name:"Lebron James", img:"lebron.jpeg", careerAvgPts:27.2},
      {name:"Chris Paul", img:"paul.jpeg", careerAvgPts:18.8},
      {name:"Dwyane Wade", img:"wade.jpeg", careerAvgPts:23.8}
  ];
});

myApp.directive('playerDirective', function (){
  return {
    restric:'A',
    scope:{
      player:"="
    },
    templateUrl: "playerDirective.html"
  };
});
