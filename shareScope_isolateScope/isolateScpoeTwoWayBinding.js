(function (){
  angular.module('app').
  directive('isolateScpoeTwoWayBinding',function (){
    return {
      scope:{
        datasource: '='
      },
      template: '<p> Name: {{ datasource.name }} </p> <p>Carrer Average PPG: {{ datasource.ppt }} </p>' +
                '<br />' +
                '<button ng-click=" datasource.name =\'Kobe Bryant\'  " > Change </button> '+
                '<p style="color:red">* Since it is a two-way binding directive, if we change the value of scope in this directive, that will also change the value of $scope in the controller</p>'
    };
  });

}());
