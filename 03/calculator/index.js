//import czterech funkcji z innych plików
const addDodawanie = require("./addDodawanie.js");
const divideDzielenie = require("./divideDzielenie.js");
const multiplyMnozenie = require("./multiplyMnozenie.js");
const substractOdejmowanie = require("./substractOdejmowanie.js");

module.exports = {
  // robie tu export nie jednej funkcji ale wszystkich czterech za pomocą nowego obiektu {}
  // tak aby można było wywołac w main.js
  //nazwa exportowanego obiektu : nazwa zaimportowanej metody
  add: addDodawanie,
  divide: divideDzielenie,
  multiply: multiplyMnozenie,
  substract: substractOdejmowanie,
  config: require("./config.json") //importuje plik config.json, zostanie on wczytany i sparasofany
  //bedzie dostępny jako obiekt javascriptowy
};
