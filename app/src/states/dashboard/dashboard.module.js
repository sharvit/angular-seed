(function() {
  'use strict';

  angular
    .module('app.states.dashboard', [
      'ui.router',

      'app.states.dashboard.state1',
      'app.states.dashboard.state2'
    ])

    .config(config)

    .controller('DashboardCtrl', DashboardCtrl)

  ;

  /* @ngInject */
  function config ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when('/dashboard', '/dashboard/state1');

    $stateProvider.state('dashboard', {
      url: '/dashboard',
      templateUrl: 'templates/states/dashboard/dashboard.html',
      abstract: true,
      controller: 'DashboardCtrl'
    });
  }

  function DashboardCtrl () {

  }

  require('./state1/state1.module.js');
  require('./state2/state2.module.js');
})();