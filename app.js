// Load the http module to create an http server.
var http = require('http');
var fs = require('fs');

var server = http.createServer(function (request, response) {
    list=fs.readFileSync('sitelist.txt').toString().split("\n");
    rnd = Math.floor(Math.random()*list.length);
  	response.writeHead(200, {"Content-Type": "text/html"});
  	response.end(getHtmlPage(list[rnd]));
});

server.listen(8000);
console.log("Server running at http://127.0.0.1:8000/");

function getHtmlPage(url)
{
	console.log("requested URL : "+url);
	return 	"<html><head><meta HTTP-EQUIV='REFRESH' content='1; url="+url+"'></head>"+
			"<body>So long and thanks for all the fish</body></html>";n				
}

