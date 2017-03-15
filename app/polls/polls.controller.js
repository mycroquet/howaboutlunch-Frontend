(function(){
  'use strict'

  angular
    .module('howaboutlunch')
    .controller('PollController', PollController)

    function PollController(){
      const vm = this

      console.log('Hello from the Poll Controller');
    }

})();
