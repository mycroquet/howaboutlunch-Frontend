(function() {
        'use strict'


        angular
            .module('howaboutlunch')
            .controller('placeListController', placeListController)

        placeListController.$inject = ['$http','$scope']

        function placeListController($http, $scope) {
            const vm = this

            vm.$onInit = function() {
                $http.get('http://localhost:4000/places?latitude=39.7639175&longitude=-105.0178755&term=food')
                    .then(function(response) {
                        vm.places = response.data.businesses
                        console.log(response.data.businesses);
                    })

                $scope.dropzoneFields = []
                $scope.dragging = false
                vm.currentDragging;
                console.log($scope.dropzoneFields);

                vm.setCurrentDragging = function(place){
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
          }

        })();
