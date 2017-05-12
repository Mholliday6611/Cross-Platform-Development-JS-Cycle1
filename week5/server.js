	require("dotenv").config();

	var express = require('express');
	var app = express();

	app.get('/', function(request, respond){
		if(process.env.NODE_ENV == 'dev'){
			respond.json({
			"user": process.env.DB_USER,
			"pass": process.env.DB_PASS
		});
		}else {
			respond.json({
				"user": "User does not exist",
				"pass": "user does not exist"
			});
		}
	});

	app.listen(process.env.PORT || 8080);

	console.log("Server is Running!?!");
