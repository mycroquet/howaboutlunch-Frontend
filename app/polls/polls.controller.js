(function(){
  'use strict'

  angular
    .module('howaboutlunch')
    .controller('PollController', PollController)

    function PollController($http){
      const vm = this
      const serverUrl = window.location.hostname == 'localhost' ? 'http://localhost:4000/' : 'https://howaboutlunch.herokuapp.com/'
      vm.pollUrl = window.location.hostname == 'localhost' ? 'http://localhost:3000/#!/' : 'https://howboutlunch-a8532.firebaseapp.com/#!/'


      vm.$onInit = function() {
        $http.get(serverUrl + 'poll/43')
            .then(function(response) {
              vm.polls = response.data.poll
              console.log(response.data.poll);

            })

            vm.castVote = function(polls) {
              console.log('click');
                var voteInfo = {
                  name: vm.polls.name,
                  votes: vm.polls.votes
                }

                $http.post(serverUrl + 'poll', pollInfo)
                    .then(function(result) {
                        console.log(result.data.poll_url);
                        vm.pollCreated = true
                        vm.poll = result.data
                    })
            }


      }
      console.log('Hello from the Poll Controller');
    }

    angular
      .module('howaboutlunch')
      .controller('resultsController', resultsController)

      function resultsController($http) {
        const vm = this
        const serverUrl = window.location.hostname == 'localhost' ? 'http://localhost:4000/' : 'https://howaboutlunch.herokuapp.com/'
        vm.pollUrl = window.location.hostname == 'localhost' ? 'http://localhost:3000/#!/' : 'https://howboutlunch-a8532.firebaseapp.com/#!/'


        vm.$onInit = function() {
          console.log('STUFF');
          $http.get(serverUrl + 'poll/43')
              .then(function(result) {
                console.log(result.data.poll);
                vm.votes = result.data.poll
              })
        }
      }

})();
