'use strict';

let drinks = [];
function Drink(dName, ingredients, image, isCold, isHot, price) {
    this.dName = dName;
    this.ingredients = ingredients;
    this.image = image;
    this.isCold = isCold;
    this.isHot = isHot;
    this.price = price;
    drinks.push(this);
}

Drink.prototype.render = function () {
    console.log(`drink name : ${this.dName} the price is ${this.price} JD`);
    document.write(`${this.dName}`);
    document.write(`<h3>the name of the drink is ${this.dName}</h3>`);
}

let latte = new Drink('Latte', ["milk", "coffe", "ice", "suger"], './assets/latte.png', true, false, 2);

let mocha = new Drink('mocha', ["milk", "coffe", "ice", "suger"], './assets/mocha.png', false, true, 3);

// drinks.push(latte);
// drinks.push(mocha);


// latte.render();
// mocha.render();
// console.log(latte);
// console.log(mocha);

console.log(drinks);


for (let i = 0; i < drinks.length; i++) {
    drinks[i].render();
}

