(function() {
    'use strict'


    angular
        .module('howaboutlunch')
        .controller('loginController', loginController)

    loginController.$inject = ['$http']

    function loginController($http) {
        const vm = this

        vm.$onInit = function() {
            vm.user = {}

        }
        vm.formSubmit = function() {
            $http.post('http://localhost:4000/login')
                .then(function(result) {
                    vm.submit = formSubmit()
                    console.log(vm.user.email);
                    console.log(vm.user.password);
                    if(user.email === result.email && user.password === result.password){
                      $state.go('profile')
                    }
                })

        }
    }

})();
