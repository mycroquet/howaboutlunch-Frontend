(function() {
        'use strict'


        angular
            .module('howaboutlunch')
            .controller('profileController', profileController)

        profileController.$inject = ['$http']

        function profileController($http) {
            const vm = this

            vm.$onInit = function() {
                $http.get('http://localhost:4000/users/profile')
                    .then(function(response) {
                      vm.users = response.data.userInfo[0]
                      console.log(response.data.userInfo[0]);
                    })
            }
        }

})();
