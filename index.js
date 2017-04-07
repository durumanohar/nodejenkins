const express = require('express');
const app = express();

//port to listen
app.listen('3000', function(req,res){
console.log('listening on port 3000');
});

app.get('/',function(req, res){
res.send("Hello World");
})