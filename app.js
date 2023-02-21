const express = require('express');
const bodyparser = require('body-parser')

const app = express();
app.use(bodyparser.urlencoded({extended: true}))

//public
app.use(express.static('public'));

//view engine
app.set('view engine', 'ejs');


app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html')
});



app.get('*', function(req, res){
    res.render("404")
})

app.listen(8000, function(){
    console.log("server started on port 8000")
})