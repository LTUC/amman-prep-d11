'use strict';
const express = require("express");
const recipesData = require('./data.json');
const app = express();
const port = 3001;
const cors = require('cors');
app.use(cors());
let result = [];
function Recipe(title, time, summary, image) {
    this.title = title;
    this.time = time;
    this.summary = summary;
    this.image = image;
    result.push(this);
}
// creating routes
// METHODs 
// GET : to read data 
// POST : to add data ( add them to DB )
// PUT : update data 
// Delete : delete data 
app.get('/', (req, res) => {
    res.send('Hello People');
    // console.log('hello people');
});

app.get('/about', aboutHandler)

function aboutHandler(req, res) {

    res.send('about');
}


// app.get("*", (req, res) => {
//     res.status(404).send('page not found');
// });
// app.post('*', (req, res) => {
//     res.status(404).send('page not found');
// });
app.get("/recipes", (req, res) => {

    recipesData.data.forEach((element) => {
        new Recipe(element.title, element.readyInMinutes, element.summary, element.image);
    });
    res.json(result);
})

app.use(notFoundHandler);

function notFoundHandler(req, res) {
    res.status(404).send('page not found');
}
app.listen(port, () => {
    console.log(`server is listing on port ${port}`);
});