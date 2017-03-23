(function(){
  'use strict'

  angular
    .module('howaboutlunch')
    .controller('PollController', PollController)

    function PollController($http){
      const vm = this

      vm.$onInit = function() {
        $http.get('http://localhost:4000/poll/9')
            .then(function(response) {
              vm.pollId = $stateParams.pollId;

              vm.polls = response.data.poll
              console.log(response.data.poll);

            })


      }
      console.log('Hello from the Poll Controller');
    }

})();
