'use strict';
app.controller('LoginCtrl',function($scope,$ionicPopup){
  $scope.emailLogin = function(){
    console.log('button was clicked on login');
    $scope.user = {};
    console.log('showing popup');

  // An elaborate, custom popup
  var myPopup = $ionicPopup.show({
    templateUrl: 'templates/partials/login.html',
    title: 'Signin',
    subTitle: 'Please signin to browse',
    scope: $scope,
    buttons: [
      { text: 'Cancel' },
      {
        text: '<b>Register</b>',
        type: 'button-positive',
        onTap: function(user) {
         user = $scope.user;
         console.log('the user is ',user);
        }
      }
    ]
   });
  };
});
