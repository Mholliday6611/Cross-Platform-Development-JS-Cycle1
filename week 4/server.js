	var http = require("http");
	var movies = require("./movies.json")


	var server = http.createServer(function(req, res){
		res.writeHead(200);

		for (var i = 0; i < movies.movies.length; i++){

			res.write("Name:" + " " + movies.movies[i].name + " " + "Genre:" + " " + movies.movies[i].genre + " " + "Year:" + " " + movies.movies[i].year + "\n")
		}
	

		res.end();
	});

	server.listen(8080);