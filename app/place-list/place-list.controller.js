(function() {
        'use strict'


        angular
            .module('howaboutlunch')
            .controller('placeListController', placeListController)

        placeListController.$inject = ['$http']

        function placeListController($http) {
            const vm = this

            vm.$onInit = function() {
              console.log('WHAAAAAT');
                $http.get('http://localhost:4000/places?latitude=39.7639175&longitude=-105.0178755&term=food')
                    .then(function(response) {
                      vm.places = response.data.businesses
                      console.log(response.data.businesses);
                    })
                    vm.options = {
                      'ui-floating': true,
                      connectWith: '.polls-container'
                    }
            }
        }

})();
