var sys = require('sys'),
    http = require('http'),
    url = require('url'),
    path = require('path'),
    fs = require('fs');
    
http.createServer(function(request, response){
    var uri = url.parse(request.url).pathname;
    var filename = path.join(process.cwd(), uri);
    path.exists(filename, function(exists){
        if(!exists){
            response.statusCode = 404;
            response.setHeader('Content-Type','text/plain');
            response.end('404 Not round\n');
            return;
        }
        
        fs.readFile(filename, 'binary', function(err, file){
            if (err){
                response.statusCode = 500;
                reponse.setHeader({'Content-Type': 'text.plain'});
                response.end(err+'\n');
                return;
            }
            
            response.statusCode = 200;
            response.end(file, "binary");
            
        });
        
        
    });
}).listen(1980);    

console.log('Server running at http://localhost:1980/');