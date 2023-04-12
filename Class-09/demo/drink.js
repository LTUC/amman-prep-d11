'use strict';
let header = document.getElementById("myHeader");
// console.log('type of header ', typeof header);
let drinksSectionEl = document.getElementById('drinksSection');
let myForm = document.getElementById('drinksForm');
let tableEl = document.getElementById('drinksTable');
// console.log(drinksSection);
let drinks = [];
function Drink(dName, ingredients, image, isCold, isHot) {
    this.dName = dName;
    this.ingredients = ingredients;
    this.image = image;
    this.isCold = isCold;
    this.isHot = isHot;
    this.price = 0;
    drinks.push(this);
}
myForm.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
    let drinkName = event.target.drinkName.value;
    // console.log(drinkName);
    let ingredients = event.target.ingredients.value;
    // console.log(ingredients);//milk,water,coffee,suger
    let ingredientsArr = ingredients.split(',');
    // console.log(ingredientsArr);
    let image = event.target.image.value;
    let cold = event.target.cold.checked;
    // console.log(cold);//cold
    let hot = event.target.hot.checked;

    let newDrink = new Drink(drinkName, ingredientsArr, image, cold, hot);
    newDrink.calculatePrice(2, 7);
    newDrink.render();
    newDrink.renderTable();
    saveData(drinks);
}

function headerRender() {
    // console.log(`drink name : ${this.dName} the price is ${this.price} JD`);
    // document.write(`${this.dName}`);
    // document.write(`<h3>the name of the drink is ${this.dName}</h3>`);
    const h1El = document.createElement("h1");
    // let el = document.getElementsByClassName("myHeader");
    h1El.textContent = 'ASAC Coffee Shop';
    // h1El.innerText 
    const pEl = document.createElement('p');
    pEl.textContent = "welcome to ASAC Coffee Shop";

    header.appendChild(pEl);
    header.appendChild(h1El);

    let imgEl = document.createElement('img');
    imgEl.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1psiy_DOob9mutTRjkbxUSsZMcSSv-LLTapMF3KIDSwp-vr_1ndDjYPG8d7HdZebFSSA&usqp=CAU"
    imgEl.style.width = '500px';
    imgEl.id = "mainImg";
    header.appendChild(imgEl);
}
Drink.prototype.renderTable = function () {
    let trEl = document.createElement('tr');
    tableEl.appendChild(trEl);
    let drinkNameEl = document.createElement('td');
    drinkNameEl.textContent = this.dName;
    trEl.appendChild(drinkNameEl);
    let drinkPriceEl = document.createElement('td');
    drinkPriceEl.textContent = this.price;
    trEl.appendChild(drinkPriceEl);
}
Drink.prototype.calculatePrice = function (min, max) {
    this.price = Math.floor(Math.random() * (max - min + 1)) + min;
}
Drink.prototype.render = function () {
    const drinkNameEl = document.createElement('h3');
    drinkNameEl.textContent = this.dName;
    drinksSectionEl.appendChild(drinkNameEl);

    let olEl = document.createElement('ol');
    for (let i = 0; i < this.ingredients.length; i++) {
        let liEl = document.createElement('li');
        liEl.textContent = this.ingredients[i];
        olEl.appendChild(liEl);
    }
    drinksSectionEl.appendChild(olEl);
    const imgEl = document.createElement('img');
    imgEl.src = this.image;
    drinksSectionEl.appendChild(imgEl);

    const priceEl = document.createElement('p');
    priceEl.textContent = `Price: ${this.price} JD`;
    drinksSectionEl.appendChild(priceEl);

    const pEl = document.createElement('p');
    if (this.isCold && this.isHot) {
        pEl.textContent = `${this.dName} is available hot and cold`;
    } else if (this.isCold) {
        pEl.textContent = `${this.dName} is available only cold`;
    } else if (this.isHot) {
        pEl.textContent = `${this.dName} is available only hot`;
    } else {
        pEl.textContent = `${this.dName} is not available`;
    }
    drinksSectionEl.appendChild(pEl);
}
headerRender();
function saveData(data) {
    // localStorage.setItem("drink", data);//wrong
    let stringifyData = JSON.stringify(data);
    localStorage.setItem("drink", stringifyData);
}
function getData() {
    let retrievedData = localStorage.getItem("drink");
    // console.log('data from localStorage ', retrievedData)
    // console.log(typeof retrievedData)
    let arrayData = JSON.parse(retrievedData);
    // console.log('data after parse ', arrayData)
    // console.log(typeof arrayData)

    // i can't access the object methods because of the stringify method convert the array into a string
    // for (let i = 0; i < arrayData.length; i++) {
    //     arrayData[i].render();
    // }
    // re-instantiation
    // console.log('before ', drinks);
    if (arrayData != null) {
        for (let i = 0; i < arrayData.length; i++) {
            new Drink(arrayData[i].dName, arrayData[i].ingredients, arrayData[i].image, arrayData[i].isCold, arrayData[i].isHot);
            drinks[i].calculatePrice(1, 7);
            drinks[i].render();
            drinks[i].renderTable();
        }
    }

    // console.log('after ', drinks);

}

// let latte = new Drink('Latte', ["milk", "coffe", "ice", "suger"], './assets/latte.png', true, false);

// let mocha = new Drink('mocha', ["coffe", "ice", "suger"], './assets/mocha.png', false, true, 3);

// drinks.push(latte);
// drinks.push(mocha);


// latte.render();
// mocha.render();
// console.log(latte);
// console.log(mocha);

// console.log(drinks);


for (let i = 0; i < drinks.length; i++) {
    drinks[i].calculatePrice(1, 5);
    drinks[i].render();
}

getData();