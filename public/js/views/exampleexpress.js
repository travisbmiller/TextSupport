var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
vap app = express();

app.use(express.static(__dirname-'/public'));
app.use(bodyParser.json());

app.listen(9000)


/////



app.get('/api/weather', function (req, res) {
  return res.json({currrent_weather: 'partly cloudy'});
});

app.post('/api/send_text_message', function (req, res) {
    
    request.post('countID:token/version/Accounts/acountinfo/Messages.json', {
      form: {
        To: '',
        From: '',
        Body: req.body.message
      }
    }, function (err, response, body) {
      if (err) {
        return res.status(500).end();
      }
      return res.status(200).end()
    });
    
});

