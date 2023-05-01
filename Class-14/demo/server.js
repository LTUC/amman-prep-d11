'use strict';
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const server = express();
server.use(cors());

const foodKey = process.env.API_KEY;
const port = process.env.PORT;
const recipesData = require('./data.json');
function Recipe(title, time, image, summary) {
    this.title = title;
    this.time = time;
    this.image = image;
    this.summary = summary;
}
// routes
server.get("/", handleHome);
server.get("/recipes", handleRecipes);
server.get("/ingredients", handleIngredients);


// handlers
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
server.listen(port, () => {
    console.log('ready and listen on port', port);
})