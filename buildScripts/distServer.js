import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';


/* eslint-disable no-console */
const port = 3010;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '../dist/index.html'))
});
app.get('/users', function(req,res) {
    //hard coded instead of hitting DB
    res.json([
        {"id": 1, "Name": "Bobby"},
        {"id": 2, "Name": "Cindy"},
        {"id": 3, "Name": "Suzy"}
    ]);
});


app.listen(port, function(err){
    if (err) {
        console.log(err);
    } else {
        open('http://localhost:'+ port);
    }
});