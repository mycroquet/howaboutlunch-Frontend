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
                name: 'profile',
                url: '/profile',
                component: 'profile'
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
            .state({
                name: 'placeList',
                url: '/placeList',
                component: 'placeList'
            })


        $urlRouterProvider.otherwise('/')

    }
})();
