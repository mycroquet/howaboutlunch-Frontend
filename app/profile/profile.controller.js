(function() {
        'use strict'


        angular
            .module('howaboutlunch')
            .controller('profileController', profileController)

        profileController.$inject = ['$http']

        function profileController($http) {
            const vm = this

            vm.$onInit = function() {
                $http.get('http://localhost:4000/users/')
                    .then(function(response) {
                      vm.user = response
                      console.log(response);
                    })
            }
        }

})();
