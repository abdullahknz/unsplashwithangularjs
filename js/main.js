var app = angular.module('unsplashApp', []);
app.controller('unsplashCtrl', function($scope, $http) {
    $scope.data = null;
    $http.get("https://api.unsplash.com/photos/?per_page=30&client_id=2d3ef64a1535600c165c7b6ae342b45d751e5be64bcda2b8b86a809e67d70ddc")
        .then(function(response) {
            console.log(response);
            $scope.data = response.data;
        });
});