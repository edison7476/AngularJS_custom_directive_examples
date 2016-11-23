(function(){

  var tableHelper = function (){

    var template = '< div class="talbeHelper"></div>';

    var link = function (scope, element, attrs){
      var headerCols = [],
          tableStar = '<table>',
          tableEnd = '</table>',
          table = '',
          visibleProps = [],
          sortCol = null,
          SortDir = 1;

      // Use $watchCollection to check datascource
      // if datascource is changed, then we call render function to render page
      scope.$watchCollection('datascource', render);
      // wireEvent();


      function render (){
        // check if we have any data binds in scope.datascource
        // Then creating the basic frame of HTML talbe
        if(scope.datascource && scope.datascource.length){
          table += tableStar;
          table += renderHeader();
          table += renderRow();
          table += tableEnd;
          renderTable();
        }
      }

      function renderHeader(){
          var tr = '<tr>';
          for (var key in scope.datascource[0]){
            // Pluging values into the table head columns from datascource
            tr += '<th>' + key + '</th>';
          }
          tr += '</tr>';
          return tr;
      }

      function renderRow(){
          var rows = '';
          for (var i = 0; i<scope.datascource.length; i++){
            rows += '<tr>';
            var rowComponent = scope.datascource[i];
            for(var key in rowComponent){
              rows += '<td>' + rowComponent[key] +'</td>';
            }
            rows += '</tr>';
          }

          return rows;
      }

      function renderTable(){
        element.html(table);
        table = '';
      }

    };// End of link (link function allows us to manipulate the DOM using javascript or jqLite)


    return {
      restrcit:'E',
      scope:{
        colmap:'=',
        datascource:'='
      },
      link:link,
      template: template
    };
  };// End of tableHelper function

  angular.module('app')
    .directive('tableHelper', tableHelper);

}());
