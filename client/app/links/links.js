angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // $scope.data = Links.data;
  // $scope.getLinks = Links.getLinks;
  $scope.data = {};

  $scope.getLinks = function () {
    Links.getLinks()
      .then(function (resp) {
        $scope.data.links = resp;
      })
  };
  $scope.getLinks();
});
