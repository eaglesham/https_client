var https = require('https');

module.exports = function getHTML (options, callback) {

  var dataBuffer = {};

  https.get(options, function(response) {

    response.setEncoding('utf8');

    response.on('data', function(data) {
      console.log('Chunk received. Length:', data.length);
      dataBuffer += data;
    });

    response.on('end', function() {
      callback(dataBuffer);
    });
  });
};

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

