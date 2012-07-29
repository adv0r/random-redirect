// Load the http module to create an http server.
var http = require('http');
var fs = require('fs');
var url = require('url');

var server = http.createServer(function (request, response) {
	if(request.method=='GET' && request.url!="/favicon.ico") {
		var signature = url.parse(request.url,true);
		var nick = "@"+signature.query.handle;
  	    list=fs.readFileSync('sitelist.txt').toString().split("\n");
        rnd = Math.floor(Math.random()*list.length);
  	    response.writeHead(200, {"Content-Type": "text/html"});  	
  	    response.end(getHtmlPage(list[rnd],nick));
  	}
});

server.listen(8000);
console.log("Server running at http://127.0.0.1:8000/");

function getHtmlPage(url,nick)
{
	console.log("nick : " + nick + ", requested URL : "+url);
	return 	"<html><head><meta HTTP-EQUIV='REFRESH' content='7; url="+url+"'></head>"+
			"<body><h1>Hey "+nick+" thank you for following, you are awesome </h1> "+
				"<h2>Now you will be redirected to a juicy random link. Have fun</h2>"+
				"<h3>@adv4nced</h3>"+
				"</body></html>";		
}

