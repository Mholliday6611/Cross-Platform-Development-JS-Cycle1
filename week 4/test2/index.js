	var express = require("express");
	var bodyParser = require('body-parser');
	var app = express();

	app.use(bodyParser.json());

	app.get("/hello", (request, respond) => {
		respond.json({"hello": "Hello Adam", "Syntax" : " NO IT'S NOT ES6!!!!!"});
		respond.end();
	});

	app.post("/hello", (request, respond) =>{
		console.log(request.body);
	});

	app.listen(8080);
	console.log("server is running!");