var https = require('https');

function getAndPrintHTML (options) {

  var dataBuffer = {};

  https.get(options, function(response) {

    response.setEncoding('utf8');

    response.on('data', function(data) {
      console.log('Chunk received. Length:', data.length);
      dataBuffer += data;
    });

    response.on('end', function() {
      console.log(dataBuffer);
    });

  });
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);