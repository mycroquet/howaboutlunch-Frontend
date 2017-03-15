(function() {
    'use strict';

    angular
        .module('howaboutlunch')
        .config(config);

    function config($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state({
                name: 'home',
                url: '/',
                component: 'home'
            })
            .state({
                name: 'polls',
                url: '/buildpoll',
                component: 'polls'
            })
            .state({
                name: 'login',
                url: '/login',
                component: 'login'
            })
            .state({
                name: 'signup',
                url: '/signup',
                component: 'signup'
            })


        $urlRouterProvider.otherwise('/')

    }
})();
