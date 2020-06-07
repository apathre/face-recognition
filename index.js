var http = require('http');
var fs = require('fs');
const faceapi = require('face-api.js');

const PORT=8080; 

fs.readFile('./face.html', function (err, html) {

    if (err) throw err;    

    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(PORT);
});