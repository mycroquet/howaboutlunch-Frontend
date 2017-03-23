(function(){
  'use strict'

  angular
    .module('howaboutlunch')
    .controller('ballotController', ballotController)

    function ballotController($http){
      const vm = this

      vm.$onInit = function() {
        $http.get('http://localhost:4000/poll/9')
            .then(function(response) {

              vm.ballots = response.data.poll
              console.log(response.data.poll);

            })

          


      }
    }

})();
