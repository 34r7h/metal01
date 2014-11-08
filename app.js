angular.module('metal01', ['ui.bootstrap','ui.utils','ui.router','ngAnimate','firebase']);

angular.module('metal01').config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('landing', {
        url: '/',
        controller: 'LandingCtrl',
        templateUrl: 'partial/landing/landing.html'
    });
    /* Add New States Above */
    $urlRouterProvider.otherwise('/');

});

angular.module('metal01').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
