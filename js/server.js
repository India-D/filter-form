const express = require('express')
const fs = require('fs');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(express.static('public'));

let names = ['jack','jean','abel','ines','claude','laura'];



app.post('/filter', function (req, res) {
const searchbar = req.body.searchbar;

let filtered = names.filter(function (name) {
if (name.startsWith(searchbar)) {
    return name;
}})


res.status(200).send(filtered)
console.log(req.body);
console.log(filtered);


})

app.listen(8000, function () {
    console.log('Example app listening on port 8000!')
})