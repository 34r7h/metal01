angular.module('metal01').factory('data',function($q, $firebase, Firebase, $timeout) {
var fb = new Firebase('https://metal.firebaseio.com');
	var data = {

        hello:'hello!',
        greeting:'',
        promise: function() {
            $timeout(function () {
                console.log('fb',fb);

                var deferred = $q.defer();
                if (this.greeting === '') {
                    this.greeting = $firebase(fb);
                    deferred.resolve();
                }
                console.log('greetings',this.greeting);
                return deferred.promise;

            }, 2000);
        }

    };

	return data;
});
