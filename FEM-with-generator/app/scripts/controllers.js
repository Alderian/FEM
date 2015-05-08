angular.module('femApp.controllers', [])

// -- HOME & Login --
.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

// -- TICKET --
.controller('TicketCtrl', function($scope, $stateParams) {
})

// -- HISTORY --
.controller('HistoryCtrl', function($scope) {
  $scope.history = [
    { client: { name: 'Reggae', id: 1 }, CAE: "12345" },
    { client: { name: 'Chill', id: 2 }, CAE: "12345" },
    { client: { name: 'Dubstep', id: 3 }, CAE: "12345" },
    { client: { name: 'Indie', id: 4 }, CAE: "12345" },
    { client: { name: 'Rap', id: 5 }, CAE: "12345" },
    { client: { name: 'Cowbell', id: 6 }, CAE: "12345" }
  ];
})

.controller('HistoryTicketCtrl', function($scope, $stateParams) {
})

// -- CLIENTS --
.controller('ClientsCtrl', ['$scope','Client',function($scope,Client){
  $scope.clients = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];


      Client.getAll().success(function(data){
          $scope.clients=data.results;
      });

      $scope.onClientDelete=function(client){
          Client.delete(client.objectId);
          $scope.client.splice($scope.client.indexOf(client),1);
      }

})

.controller('ClientNewCtrl',['$scope','Client','$state',function($scope,Client,$state){

    $scope.client={};

    $scope.create=function(){
        Client.create({content:$scope.client.content}).success(function(data){
            $state.go('app.clients');
        });
    }


}]).controller('ClientEditCtrl',['$scope','Client','$state','$stateParams',function($scope,Client,$state,$stateParams){

    $scope.client={id:$stateParams.id,content:$stateParams.content};

    $scope.edit=function(){
        Client.edit($scope.client.id,{content:$scope.client.content}).success(function(data){
            $state.go('app.clients');
        });
    }

}])

// -- COFIGURATION --
.controller('ConfigCtrl', function($scope, $stateParams) {
})

// -------------------------

;
