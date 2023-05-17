'use strict';
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const pg = require('pg');
const jsonData = require('./data.json')
const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT;
const client = new pg.Client(process.env.DATABASE_URL);
app.get('/', helloWorldHandler);
app.get('/allMemes', getAllMemesHandler);//will send data from json file
app.post('/addFavMeme', addFavMemeHandler);
app.get('/favMeme', getfavMemeHandler);//read from database
app.get('/favMeme/:id', getOneFavMemeHandler);
app.put('/updatefavMeme/:id', updatefavMemeHandler);
app.delete('/deleteFavMeme/:id', deleteFavMemeHandler);
app.use('*', notFoundHandler);
app.use(errorHandler)
function helloWorldHandler(req, res) {
    return res.status(200).send("Hello World");
}
function getAllMemesHandler(req, res) {
    console.log("your req was sent !")
    res.send(jsonData);
}
function addFavMemeHandler(req, res) {
    const meme = req.body;
    const sql = `INSERT INTO memes(image_path, meme_name, rank, tags, top_text) VALUES($1, $2, $3, $4, $5) RETURNING *;`
    const values = [meme.image_path, meme.meme_name, meme.rank, meme.tags, meme.top_text];
    client.query(sql, values).then((data) => {
        res.status(201).json(data.rows);
    })
        .catch(error => {
            console.log(error);
            errorHandler(error, req, res);
        });
};
function getfavMemeHandler(req, res) {
    const sql = `SELECT * FROM memes;`;
    client.query(sql).then(data => {
        res.status(200).send(data.rows);
    })
        .catch(error => {
            errorHandler(error, req, res);
        });
};
function getOneFavMemeHandler(req, res) {
    const id = req.params.id;
    const sql = `SELECT * FROM memes WHERE id = ${id};`;
    client.query(sql).then(data => {
        res.status(200).json(data.rows);
    })
        .catch(error => {
            errorHandler(error, req, res);
        });
};
function updatefavMemeHandler(req, res) {
    const id = req.params.id;
    const meme = req.body;
    const sql = `UPDATE memes SET image_path=$1, meme_name=$2, rank=$3, tags=$4, top_text=$5 WHERE id=${id} RETURNING *;`;
    const values = [meme.image_path, meme.meme_name, meme.rank, meme.tags, meme.top_text];
    client.query(sql, values).then(data => {
        const newsql = `select * from memes;`
        client.query(newsql).then((data) => {
            res.status(200).json(data.rows);
        })
        // res.status(200).json(data.rows);
        // or you can send 204 status with no content
        // return res.status(200).json(data.rows);
    }).catch(err => {
        console.log(err);
        errorHandler(err, req, res);
    });

};
function deleteFavMemeHandler(req, res) {
    const id = req.params.id;
    const sql = `DELETE FROM memes WHERE id=${id};`;
    client.query(sql).then(() => {
        const newsql = `select * from memes;`
        client.query(newsql).then((data) => {
            res.status(200).json(data.rows);
        })
        // res.status(204).json({});
    })
        .catch(err => {
            errorHandler(err, req, res);
        })
};
function notFoundHandler(request, response) {
    response.status(404).send('not found');
}
function errorHandler(error, req, res) {
    const err = {
        status: 500,
        message: error
    }
    res.status(500).send(err);
};
client.connect()
    .then(() => {
        app.listen(PORT, () =>
            console.log(`listening on ${PORT}`)
        );
    });