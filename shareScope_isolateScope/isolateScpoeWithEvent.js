(function (){
  angular.module('app').
  directive('isolateScpoeWithEvent',function (){
    return {
      scope:{
        datasource: '=',
        action:'&'
      },
      template: '<p> Name: {{ datasource.name }} </p> <p>Carrer Average PPG: {{ datasource.ppt }} </p>' +
                '<br />' +
                '<button ng-click="action()"> Change </button> '+
                '<p style="color:red">* Since it is a two-way binding directive, if we change the value of directive scope, that will also change the value of parent scope in the controller</p>'
    };
  });

}());
