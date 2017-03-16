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
                $http.get('https://howaboutlunch.herokuapp.com/api/v1/places')
                    .then(function(response) {
                        console.log(response);
                        vm.places = [{
                            name: response.name,
                            type: response.types,
                            address: response.vicinity,
                            location: response.geometry.location,
                            price_level: response.price_level,
                            rating: response.rating,
                            open_now: response.opening_hours.open_now,
                            placeId: response.place_id

                        }]


                    })
            }
        }

})();
