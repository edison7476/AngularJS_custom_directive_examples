(function(){

  var tableHelper = function (){

    var tamplate = '<div class="talbeHelper"></div>';

    var link = function (scope, element, attrs){
      var headerCols = [],
          tableStar = '<table>',
          tableEnd = '</table>',
          table = '',
          visibleProps = [],
          sortCol = null,
          SortDir = 1;
      // use $watchCollection to watch if the datascource is changed
      scope.$watchCollection('datascource', render);
      wireEvent();

    };

    return {
      restrcit:'E',
      scope:{
        colmap:'=',
        datascource:'='
      },
      link:link,
      tamplate: template
    };
  };
  angular.module('app')
    .directive('tableHelper', tableHelper);

}());
