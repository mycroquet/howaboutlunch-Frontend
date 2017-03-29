(function() {
    'use strict'


    angular
        .module('howaboutlunch')
        .controller('placeListController', placeListController)

    placeListController.$inject = ['$http', '$scope']

    function placeListController($http, $scope) {
        const vm = this
        const serverUrl = window.location.hostname == 'localhost' ? 'http://localhost:4000/' : 'https://howaboutlunch.herokuapp.com/'
        vm.pollUrl = window.location.hostname == 'localhost' ? 'http://localhost:3000/#!/poll/' : 'https://howboutlunch-a8532.firebaseapp.com/#!/poll/'

        vm.$onInit = function() {

            navigator.geolocation.getCurrentPosition(function(position) {
              console.log(position);
                var pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                }


                $http.get(serverUrl + 'places?' + `latitude=${pos.lat}&longitude=${pos.lng}&term=food`)
                    .then(function(response) {
                        vm.places = response.data.businesses
                        console.log(response.data.businesses);
                    })
            });

        }
        vm.pollSubmit = function(places) {
            console.log('click');
            var pollInfo = {
                title: 'Default Title:' + ' ' + new Date(),
                enabled: true,
                places: $scope.dropzoneFields.map(function(place) {
                    return {
                        place_id: place.id,
                        name: place.name,
                        votes: 0
                    }
                })
            }
            $http.post(serverUrl + 'poll', pollInfo)
                .then(function(result) {
                    console.log(result.data.poll_url);
                    vm.pollCreated = true
                    vm.poll = result.data
                })
        };

        $scope.dropzoneFields = []
        $scope.dragging = false
        vm.currentDragging;
        console.log($scope.dropzoneFields);

        vm.setCurrentDragging = function(place) {
            vm.currentDragging = place;
        }

        vm.draggable = {
            'ui-floating': true,
            connectWith: '.dropzone',
            start: function(e, ui) {
                $scope.$apply(function() {
                    $scope.dragging = true
                });
                $('.dropzone').sortable('refresh');
            },
            update: function(e, ui) {
                if (ui.item.sortable.droptarget[0].classList[0] !== "dropzone")
                    ui.item.sortable.cancel();
            },
            stop: function(e, ui) {
                if (ui.item.sortable.droptarget == undefined) {

                    $scope.$apply($scope.dragging = false);
                    return;
                } else if (ui.item.sortable.droptarget[0].classList == "dropzone") {
                    // run code when item is dropped in the dropzone
                    console.log('ELSE TRiggered');
                    $scope.dropzoneFields.push(vm.currentDragging)
                    $scope.$apply($scope.dragging = false);
                } else {
                    $scope.$apply($scope.dragging = false);
                }
            }
        };

    }

})();
