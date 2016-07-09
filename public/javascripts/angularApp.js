var app =angular.module('app', ['angularGrid']);

app.factory('items', ['$http', function ($http) {
    var o = {
        items:[]
    };

    // for(var i=0; i<50; i++){
    //     o.items.push({
    //         id: i, title: $http.get('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand'), link: 'https://unsplash.it/300/' +(i%3+3)*100 + '/?random'
    //     });
    // }

    o.getCount = function(){
        return o.items.length;
    };

    o.getMore = function(start, end){
        for(var i = start; i<end; i++){
            o.items.push({
                id: i+1, title: $http.get('https://quotesondesign.com/wp-json/posts?filter[orderby]=rand').success(function(data){
                    return data.content;
                }), link: 'https://unsplash.it/300/' +(i%3+3)*100 + '/?random'
            });
        }
        console.log(start, end, o.getCount());
        return o.items.slice(start, end);
    };


    return o;
}]);

app.controller('MainCtrl', ['$scope', 'items', function ($scope, items) {
    $scope.start = 0;
    $scope.getTogether = 5;
    $scope.end = $scope.start + $scope.getTogether;

    $scope.items = [];


    $scope.getMore = function( start, end){
        $scope.items = $scope.items.concat(items.getMore(start, end));
        $scope.start += $scope.getTogether;
        $scope.end += $scope.getTogether;
    };

}]);