var myApp = angular.module('myApp');

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
