(function() {
    'use strict'


    angular
        .module('howaboutlunch')
        .controller('loginController', loginController)

    loginController.$inject = ['$http']

    function loginController($http) {
        const vm = this

        vm.$onInit = function() {
            $http.get('https://howaboutlunch.herokuapp.com/api/v1/user').then(function(response) {
                vm.things = response.data
            })
        }
    }

})();
