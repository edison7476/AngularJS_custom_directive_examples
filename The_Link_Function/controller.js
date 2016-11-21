var app = angular.module('app', []);
app.controller('myController', function($scope, $http){

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

  // $http.get('data.json', function (response){
  //   $scope.players = response;
  // });


  $scope.players = [
      {"Name":"Allen Iverson", "img":"iverson.jpeg","Points_per_Game":26.7,"Rebounds_per_Game":3.7,"Assits_per_Game":6.2, "Field_Goal":42.5,"Field_Goal_3PT":31.3,"Free_Throw":78.0},
      {"Name":"Kyrie Irving", "img":"irving.jpeg", "Points_per_Game":20.8,"Rebounds_per_Game":3.4,"Assits_per_Game":5.5, "Field_Goal":45.2,"Field_Goal_3PT":37.9,"Free_Throw":86.5 },
      {"Name":"Stephen Curry", "img":"curry.jpeg", "Points_per_Game":22.5,"Rebounds_per_Game":4.3,"Assits_per_Game":6.8, "Field_Goal":47.8,"Field_Goal_3PT":44.4,"Free_Throw": 90.1},
      {"Name":"Kobe Bryat", "img":"kobe.jpeg", "Points_per_Game":25.0,"Rebounds_per_Game":5.2,"Assits_per_Game":4.7, "Field_Goal":44.7,"Field_Goal_3PT":32.9,"Free_Throw":83.7},
      {"Name":"Lebron James", "img":"lebron.jpeg", "Points_per_Game":27.2,"Rebounds_per_Game":7.2,"Assits_per_Game":6.9, "Field_Goal":49.8,"Field_Goal_3PT":34.0,"Free_Throw":74.4},
      {"Name":"Chris Paul", "img":"paul.jpeg", "Points_per_Game":18.8,"Rebounds_per_Game":4.4,"Assits_per_Game":9.9, "Field_Goal":47.3,"Field_Goal_3PT":36.6,"Free_Throw":86.5},
      {"Name":"Dwyane Wade", "img":"wade.jpeg", "Points_per_Game":23.8,"Rebounds_per_Game":4.8,"Assits_per_Game":5.8, "Field_Goal":48.7,"Field_Goal_3PT":28.7,"Free_Throw":76.8},
      {"Name":"Kevin Durant", "img":"durant.jpeg", "Points_per_Game":27.4,"Rebounds_per_Game":7.1,"Assits_per_Game":3.7, "Field_Goal":48.5,"Field_Goal_3PT":38,"Free_Throw":88.2},
      {"Name":"Carmelo Anthony", "img":"melo.jpeg", "Points_per_Game":24.9,"Rebounds_per_Game":6.6,"Assits_per_Game":3.1, "Field_Goal":45.3,"Field_Goal_3PT":34.3,"Free_Throw":81.2},
      {"Name":"Russell Westbrook", "img":"Westbrook.jpeg", "Points_per_Game":21.6,"Rebounds_per_Game":5.6,"Assits_per_Game":7.6, "Field_Goal":43.4,"Field_Goal_3PT":30.4,"Free_Throw":81.7},
      {"Name":"Kevin Garnett", "img":"kg.jpeg", "Points_per_Game":17.8,"Rebounds_per_Game":10.0,"Assits_per_Game":3.7, "Field_Goal":49.7,"Field_Goal_3PT":27.5,"Free_Throw":78.9},
      {"Name":"Dirk Nowitzki", "img":"dirk.jpeg", "Points_per_Game":22,"Rebounds_per_Game":7.9,"Assits_per_Game":2.5,"Field_Goal":47.4,"Field_Goal_3PT":38.1,"Free_Throw":87.9},
      {"Name":"Blake Griffin", "img":"griffin.jpg", "Points_per_Game":21.4,"Rebounds_per_Game":9.6,"Assits_per_Game":4.0, "Field_Goal":52,"Field_Goal_3PT":26.3,"Free_Throw":66.2}
  ];

});
