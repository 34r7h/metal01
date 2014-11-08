angular.module('metal01').controller('LandingCtrl', ['$scope', '$firebase', 'Firebase', '$window', '$location' ,
    function($scope, $firebase, Firebase, $window, $location){

        var location = $location.host();
        location.toLowerCase().replace(/'+/g, '').replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "-").replace(/^-+|-+$/g, '');
        var indexRef = new Firebase("https://metal.firebaseio.com/index/domains/"+ location);
        console.log('indexRef',indexRef);
        var indexSync = $firebase(indexRef);
        console.log('indexSync',indexSync);
        var indexArray = indexSync.$asArray();
        var indexObject = indexSync.$asObject();

        setTimeout(function(){
            console.log('domainRef',indexObject.$value);
            var domainRef = 'https://metal.firebaseio.com/domains/'+indexObject.$value;
            var ref = new Firebase(domainRef);
            var sync = $firebase(ref);
            var mediaSync = $firebase(mediaRef);
            $scope.data = sync.$asObject();
            console.log('data',$scope.data);
            $scope.list = sync.$asArray();
            console.log('list',$scope.list);
            $scope.media = mediaSync.$asArray();
            $scope.height = $window.innerHeight;
            $scope.location = $location.host();
        },2000);
        var mediaRef = new Firebase("https://metal.firebaseio.com/media/");













}]);
