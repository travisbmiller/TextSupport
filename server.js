var express = require('express'),
 bodyParser = require('body-parser'),
   Firebase = require('firebase');
      
var app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public/'));  

//Twilio Info
var accountSid = 'AC27dcba109c69f9ff35c2735502f951ba';
var authToken = '2dbc7cb484c146c00538669af5836c15';

var twilio = require('twilio');
var client = new twilio.RestClient(accountSid, authToken);
 

app.get('/api/support/resources/:resource_name', function (req, res) {
  
    
    
    var options = {
    root: __dirname + '/public/',
    dotfiles: 'deny',
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
  };

  var fileName = req.params.resource_name;
  res.sendFile(fileName, options, function (err) {
    if (err) {
      console.log(err);
      res.redirect('/index.html')
      res.status(err.status).end();
    }
    else {
      console.log('Sent:', fileName);
    }
  });



});






app.post('/api/support/messages', function (req, res) {

  client.messages.create({
    to: '+' + req.body.sendTo,
    from:'+15416369555',
    body: req.body.replyMessage
  }, function(error, message) {
    
    if (error) {
        console.log(error.message);
        res.status(400).send(error.message);
    }

    // // push to firebase
    var messageListRef = new Firebase("https://twiliotextsupport.firebaseio.com/messages/"+req.body.sendTo);
    messageListRef.push(message);
    res.status(200).json("Message Added")
  });

})


app.listen(9001);





