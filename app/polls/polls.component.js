(function() {
    'use strict';

    angular
        .module('howaboutlunch')
        .component('polls', {
            controller: 'PollController',
            templateUrl: '/app/polls/polls.html'
        });

    angular
        .module('howaboutlunch')
        .component('results', {
            controller: 'resultsController',
            templateUrl: '/app/polls/results.html'
        });


})();
