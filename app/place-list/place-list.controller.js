(function() {
        'use strict'


        angular
            .module('howaboutlunch')
            .controller('placeListController', placeListController)

        placeListController.$inject = ['$http','$scope']

        function placeListController($http, $scope) {
            const vm = this

            vm.$onInit = function() {
              console.log($scope);
                $http.get('http://localhost:4000/places?latitude=39.7639175&longitude=-105.0178755&term=food')
                    .then(function(response) {
                        vm.places = response.data.businesses
                        console.log(response.data.businesses);
                    })

                $scope.dropzoneFields = []
                $scope.dragging = false
                vm.currentDragging;

                vm.setCurrentDragging = function(place){
                  console.log(place);
                  vm.currentDragging = place;
                }

                vm.options = {
                    'ui-floating': true,
                    connectWith: '.dropzone',
                    start: function(e, ui) {
                        $scope.$apply(function() {
                          console.log('DRAGGGG');
                            $scope.dragging = true
                        });
                        $('.dropzone').sortable('refresh');
                    },
                    update: function(e, ui) {
                        if (ui.item.sortable.droptarget[0].classList[0] !== "dropzone")
                            ui.item.sortable.cancel();
                    },
                    stop: function(e, ui) {
                      console.log(ui.item.sortable);
                        if (ui.item.sortable.droptarget == undefined) {

                            $scope.$apply($scope.dragging = false);
                            return;
                        } else if (ui.item.sortable.droptarget[0].classList[0] == "dropzone") {
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
