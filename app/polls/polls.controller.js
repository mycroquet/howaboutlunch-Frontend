(function() {
    'use strict'

    angular
        .module('howaboutlunch')
        .controller('PollController', PollController)

    function PollController($http, $stateParams, $state) {
        const vm = this
        const serverUrl = window.location.hostname == 'localhost' ? 'http://localhost:4000/' : 'https://howaboutlunch.herokuapp.com/'
        vm.pollUrl = window.location.hostname == 'localhost' ? 'http://localhost:3000/#!/' : 'https://howboutlunch-a8532.firebaseapp.com/#!/'


        vm.$onInit = function() {
            vm.poll_url = $stateParams.id

            console.log('POLL URL');
            console.log(vm.poll_url);
            $http.get(serverUrl + 'poll/' + $stateParams.id)
                .then(function(response) {
                    vm.polls = response.data
                    console.log(response.data);


                })

            vm.castVote = function() {
                console.log('SHIT WORKS?');

                $http.post(serverUrl + 'vote/' + $stateParams.id, {
                  poll_url: $stateParams.id,
                  result_id: vm.selectedplace
                })
                    .then(function(result) {
                        $state.go('results', {
                            poll_url: $stateParams.id

                        })
                        console.log(result);
                    })
            }


        }
    }

    /* Bring back poll results */
    angular
        .module('howaboutlunch')
        .controller('resultsController', resultsController)

    function resultsController($http, $stateParams) {
        const vm = this
        const serverUrl = window.location.hostname == 'localhost' ? 'http://localhost:4000/' : 'https://howaboutlunch.herokuapp.com/'
        vm.pollUrl = window.location.hostname == 'localhost' ? 'http://localhost:3000/#!/' : 'https://howboutlunch-a8532.firebaseapp.com/#!/'


        vm.$onInit = function() {
            $http.get(serverUrl + 'results/' + $stateParams.poll_url)
                .then(function(result) {
                    vm.results = result.data
                    console.log(result.data);
                    //vm.votes = result.data
                })
        }
    }

})();
