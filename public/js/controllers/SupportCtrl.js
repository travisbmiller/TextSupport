var app = angular.module('app');
app.controller('SupportCtrl', function ($scope, $firebase, firebaseService) {

    var vm = this;

    var ref = new Firebase("https://twiliotextsupport.firebaseio.com/messages");
    // create an AngularFire reference to the data
    var sync = $firebase(ref);
    // download the data into a local object
    vm.data = sync.$asArray();
    console.log(vm.data)
    $scope.reply = function (message, reply) {
        var sendTo = message["$id"];
        var replyMessage = reply;
        

        firebaseService.reply(sendTo, replyMessage).then(function(data) {
            console.log("fired");
            vm.replyMessage[message.$id] = '';
        });

        
    }

});