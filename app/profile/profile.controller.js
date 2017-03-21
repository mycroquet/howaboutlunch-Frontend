(function() {
        'use strict'


        angular
            .module('howaboutlunch')
            .controller('profileController', profileController)

        profileController.$inject = ['$http']

        function profileController($http) {
            const vm = this
            vm.user = {}

            vm.$onInit = function() {
                $http.get('http://localhost:4000/users/profile/1')
                    .then(function(response) {
                      vm.users = response.data.userInfo
                      console.log(response.data.userInfo);
                    })
            }
        }

})();
