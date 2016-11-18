(function (){
  angular.module('app').
  directive('isolateScpoeTwoWayBinding',function (){
    return {
      scope:{
        datasource: '='
      },
      template: '<p> Name: {{ datasource.name }} </p> <p>Carrer Average PPG: {{ datasource.ppt }} </p>' +
                '<br /><button ng-click=" datasource.name=\' Kobe Bryant\' " datasource.ppt=25> Change </button>'
    };
  });

}());
