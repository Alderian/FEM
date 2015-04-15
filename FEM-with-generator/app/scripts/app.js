// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('femApp', ['ionic', 'femApp.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  // -- HOME --
  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  // -- TICKET --
  .state('app.ticket-1', { // Seleccionar cliente
    url: "/ticket-1",
    views: {
      'menuContent': {
        templateUrl: "templates/ticket-1.html",
        controller: 'TicketCtrl'
      }
    }
  })

  .state('app.ticket-1-1', { // Agregar cliente
    url: "/ticket-1-1",
    templateUrl: "templates/ticket-1-1.html",
    controller: 'TicketCtrl'
  })

  .state('app.ticket-2', { // Lista de conceptos
    url: "/ticket-2",
    views: {
      'menuContent': {
        templateUrl: "templates/ticket-2.html",
        controller: 'TicketCtrl'
      }
    }
  })

  .state('app.ticket-2-2', { // Agregar concepto
    url: "/ticket-2-2",
    templateUrl: "templates/ticket-2-2.html",
    controller: 'TicketCtrl'
  })

  .state('app.ticket-3', { // Resumen
    url: "/ticket-3",
    views: {
      'menuContent': {
        templateUrl: "templates/ticket-3.html",
        controller: 'TicketCtrl'
      }
    }
  })

  .state('app.ticket-4', { // Resultado
    url: "/ticket-4",
    views: {
      'menuContent': {
        templateUrl: "templates/ticket-4.html",
        controller: 'TicketCtrl'
      }
    }
  })

  // -- HISTORY --
  .state('app.history', {
    url: "/history",
    views: {
      'menuContent': {
        templateUrl: "templates/history.html",
        controller: 'HistoryCtrl'
      }
    },
    cache:false // Will ask for objects again
  })

  .state('app.history.single', {
    url: "/history/:ticketId",
    views: {
      'menuContent': {
        templateUrl: "templates/history_ticket.html",
        controller: 'HistoryTicketCtrl'
      }
    }
  })

  // -- CLIENTS --
  .state('app.clients', {
    url: "/clients",
    views: {
      'menuContent': {
        templateUrl: "templates/clients.html",
        controller: 'ClientsCtrl'
      }
    },
    cache:false // Will ask for objects again
  })

  .state('app.clientEdit', {
    url: "/client/edit/:clientId/:name/:cuit/:email",
    templateUrl: "templates/clientEdit.html",
    controller: 'ClientEditCtrl'
    }
  })

  // -- COFIGURATION --
  .state('app.config', {
    url: "/config",
    views: {
      'menuContent': {
        templateUrl: "templates/config.html",
        controller: 'ConfigCtrl'
      }
    }
  })

// ----------------------

; // Fin de states


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/ticket-1');
});
