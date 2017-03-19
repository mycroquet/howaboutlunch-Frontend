(function() {
    'use strict'


    angular
        .module('howaboutlunch')
        .controller('signupController', signupController)

    signupController.$inject = ['$http']

    function signupController($http) {
        const ENDPOINT = 'http://localhost:4000/signup'
        const vm = this

        vm.$onInit = function() {
            vm.user = {}
            console.log(vm.user);
        }

        function alertError() {
            $('.error-container').html(
                '<p class="alert alert-danger">Password is not valid</p>'
            );
        }

        vm.formSubmit = function() {
            var signupInfo = {
                  first_name: vm.user.first_name,
                  last_name: vm.user.last_name,
                  email: vm.user.email,
                  password: vm.user.password,
                  company: vm.user.company
            }

            if (signupInfo.password.length < 5) {
                alertError();
            } else {
                $http.post(ENDPOINT, signupInfo)
                    .then(function(result) {
                        console.log(signupInfo);
                        window.userId = result.userId
                        let id = result.userId;
                        window.location = `/users/${id}`;
                        $state.go('profile')
                    }).catch(function(error) {
                        $('.error-container').html(
                            `<p class="alert alert-danger">${error.responseJSON.message}</p>`
                        );
                    });

            }
        }
    }
})();
