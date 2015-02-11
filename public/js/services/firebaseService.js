var app = angular.module('app');

app.service('firebaseService', ['$http', function ($http) {
  
  this.reply = function (sendTo, message) {

    return $http({
      url: '/api/support/messages',
      method: 'POST',
      data: {
        sendTo: sendTo,
        replyMessage: message
      }
    }).then(function(data) {
      return data
    })

    }

}]);

