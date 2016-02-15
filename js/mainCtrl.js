var app = angular.module('friendsList');

app.controller('mainCtrl', function($scope){
$scope.friends = ['Andi', 'Kelsey', 'Josh', 'Kelly', 'Bart'];

$scope.addFriend = function() {
  $scope.friends.push($scope.newFriend);
  $scope.newFriend = "";
};

});
