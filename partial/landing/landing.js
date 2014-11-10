angular.module('metal01').controller('LandingCtrl', ['$scope', '$firebase', 'Firebase', '$window', '$location' ,
    function($scope, $firebase, Firebase, $window, $location){

        var location = $location.host();
        location.toLowerCase().replace(/'+/g, '').replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "-").replace(/^-+|-+$/g, '');
        var refString = "https://metal.firebaseio.com/index/domains/"+ location.toString() +"/";
        refString.replace(/\/|:|#|%|\.|\[|\| ]/g, '');
        $scope.height = $window.innerHeight;
        $scope.location = $location.host();

        setTimeout(function(){

            var indexRef = new Firebase(refString);
            var mediaRef = new Firebase('https://metal.firebaseio.com/media');
            var mediaSync = $firebase(mediaRef);
            var indexSync = $firebase(indexRef);
            var indexArray = indexSync.$asArray();
            var indexObject = indexSync.$asObject();

            setTimeout(function(){

                var indexValue = indexObject.$value;
                var domainRef = 'https://metal.firebaseio.com/domains/'+indexValue;
                var ref = new Firebase(domainRef);
                var sync = $firebase(ref);
                $scope.data = sync.$asObject();
                $scope.list = sync.$asArray();
                $scope.media = mediaSync.$asArray();

                setTimeout(function(){
                    console.log('indexObject',indexObject.$value);
                    console.log('indexValue',indexValue);
                    console.log('domainRef',domainRef);
                    console.log('ref',ref);
                    console.log('sync',sync);
                    console.log('refString',refString);
                    console.log('indexRef',indexRef);
                    console.log('data',$scope.data);
                    console.log('list',$scope.list);
                    console.log('media',$scope.media);
                },2000);

            }, 2000);

        },1000);















    }]);
