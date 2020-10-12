
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

app.get('/home', function (req, res) {
  res.send('Hello World!');
});
app.get('/:name/:resourse/:type' , function(req , res) {
	var name = req.params.name ;
	var resourse = req.params.resourse ;
	var type = req.params.type ;
	dig([name, 'ANY'])
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