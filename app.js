
const express = require('express');
const app = express();
const port = process.env.PORT || "8000" ;
const cors=require('cors');
const dig = require('node-dig-dns');
app.use(cors({
	origin: "http://localhost:3000",//frontend server localhost:3000 in dev , 9000 in production
	methods:['GET','POST','PUT','DELETE'],
	credentials: true , // enable set cookie,
	
}));
// app.use(function(req, res, next) {

// 	res.header('Access-Control-Allow-Credentials', true);
// 	res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
// 	res.header("Access-Control-Allow-Origin", process.env.SERVER_URL);
// 	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-   Type, Accept, Authorization");
// 	next();
// });

app.get('/:name/:resourse/:type/:sourceip/:reverseip/:ipversion/:recursion/:protocol/:tracing/:shorten/:port/:timeout/:numtries' , function(req , res) {
	var name = req.params.name ;
	var resourse = req.params.resourse ;
	var type = req.params.type ;
	var sourceip = req.params.sourceip ;
	var reverseip = req.params.reverseip ;
	var ipversion = req.params.ipversion ;
	var recursion = req.params.recursion ;
	var protocol = req.params.protocol ;
	var tracing = req.params.tracing ;
	var shorten = req.params.shorten ;
	var port = req.params.port ;
	var timeout = req.params.timeout ;
	var numtries = req.params.numtries ;
	let args = [];
	let array = [] ;
	if (name!=" "){
		args.push(name);
	}
	if (resourse!=" "){
		args.push(resourse);
	}
	args.push(type);
	if (sourceip!=="-b "){
		array.push(args);
	}
	if (reverseip !==" "){
		array.push(reverseip);
	}
	if (ipversion!==" "){
		array.push(ipversion);
	}
	if (recursion!==" "){
		array.push(recursion);
	}
	
	if (protocol!==" "){
		array.push(protocol);
	}
	if (tracing!==" "){
		array.push(tracing);
	}
	if (shorten!==" "){
		array.push(shorten);
	}
	if(port!=="-p "){
		array.push(port);
	}
	array.push(timeout);
	array.push(numtries);
	console.log(args);
	console.log(array );
	
	dig(args, array)
	.then((result) => {
		res.json(result);
	})
	.catch((err) => {
	console.log('Error:', err);
	});
	


})
app.listen(port, function () {
  console.log('Example app listening on port 8000!');
});
// function main(){
//   var dig = require('node-dig-dns');
//   console.log("Hello goorm!");
//   dig(['google.com', 'ANY'])
//    .then((result) => {
//   console.log(result)
//    })
//    .catch((err) => {
//   console.log('Error:', err);
//    });
//   }
  
//   main();