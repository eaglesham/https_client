var https = require('https');

function getAndPrintHTML () {

  var requestOptions = {
    host: 'systantris.github.io',
    path: '/http-examples/step2.html'
  };

  var dataBuffer = {};

  https.get(requestOptions, function(response) {

    response.setEncoding('utf8');

    response.on('data', function(data){
      console.log('Chunk received. Length:', data.length);
      dataBuffer += data;
    });

    response.on('end', function() {
      console.log(dataBuffer);
    });

  });
};

getAndPrintHTML();