'use strict';
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const server = express();
const pg = require("pg");
const client = new pg.Client(process.env.DATABASE_URL);
server.use(cors());
server.use(express.json());//to allow the server to read req.body
const foodKey = process.env.API_KEY;
const port = process.env.PORT;
const recipesData = require('./data.json');
function Recipe(id, title, time, image, summary) {
    this.id = id;
    this.title = title;
    this.time = time;
    this.image = image;
    this.summary = summary;
}
// routes
server.get("/", handleHome);
server.get("/recipes", handleRecipes);
server.get("/ingredients", handleIngredients);
server.get("/favrecipes", getFavRecipesHandler);
server.post("/favrecipes", addFavRecipesHandler);

// handlers
function addFavRecipesHandler(req, res) {
    const recipe = req.body;
    // {
    //     "title":"koftah",
    //     "readyinminutes":"120",
    //     "image":"https://www.example.com/spaghetti-bolognese.jpg",
    //     "summary":"step123"
    // }
    // console.log(recipe);
    // const sql = `INSERT into favrecipe (title,readyinminutes,image,summary) values ('${recipe.title}','${recipe.readyinminutes}','${recipe.image}','${recipe.summary}');`;
    const sql = `INSERT into favrecipe (title,readyinminutes,image,summary) values ($1,$2,$3,$4) RETURNING *;`;
    const values = [recipe.title, recipe.readyinminutes, recipe.image, recipe.summary];

    client.query(sql, values).then((data) => {
        res.status(201).send(data.rows);
        // res.send('added successfully');
    })
}
function getFavRecipesHandler(req, res) {
    const sql = 'select * from favrecipe;';
    // const sql = 'select title from favrecipe;';
    client.query(sql)
        .then((data) => {
            // res.send(data.rows);
            let dataFromDB = data.rows.map((item) => {
                let singleRecipe = new Recipe(
                    item.id,
                    item.title,
                    item.readyinminutes,
                    item.image,
                    item.summary
                )
                return singleRecipe;
            });
            res.send(dataFromDB);
        })
}
function handleHome(req, res) {
    res.status(200).send("welcome home ");
}
async function handleRecipes(req, res) {
    // let recipes = recipesData.data.map((item) => {
    //     return new Recipe(item.title, item.readyInMinutes, item.image, item.summary);
    // })
    const url = `https://api.spoonacular.com/recipes/random?apiKey=${foodKey}&number=4`;

    let recipesFromAPI = await axios.get(url);
    console.log("without .data ", recipesFromAPI);
    console.log("with .data", recipesFromAPI.data);
    let recipes = recipesFromAPI.data.recipes.map((item) => {
        return new Recipe(item.title, item.readyInMinutes, item.image, item.summary);
    })
    res.send(recipes);
}
function handleIngredients(req, res) {
    //the query from the frontend
    let searchByIngredients = req.query.ingredients;
    const url = `https://api.soopnacular.com/recipes/findByIngredients?apiKey=${foodKey}&ingredients=${searchByIngredients}`;
    axios.get(url)
        .then((result) => {
            console.log(result.data);
            res.send(result.data)
        })
        .catch((error) => {
            res.status(500).send(error, "error");
        });
}
client.connect().then(() => {
    server.listen(port, () => {
        console.log('ready and listen on port', port);
    });
});
