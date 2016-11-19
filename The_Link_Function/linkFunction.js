(function (){

  var linkFunction = function (){
    return {
        restric:'A',
        link: function (scope, elem, attrs){
          // example of using jqLite to manipulate the DOM
          elem.on('click', function (){
            elem.html('You Clicked Me!');
          });
          elem.on('mouseenter', function (){
            elem.css('background-color', 'yellow');
          });
          elem.on('mouseleave', function (){
            elem.css('background-color', 'white');
          });
        }
    };
  };

  angular.module('app')
    .directive('linkFunctionDemo', linkFunction);

}());
