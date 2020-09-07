//wszystkie zmienne które są tworzone w tym pliku są domyślnie prywatne dla tego pliku

var wiadomosc = "Moduł add.js";

console.log(wiadomosc);

function add(n1, n2) {
  return n1 + n2;
}

module.exports = add; //podając taką referencje eksportujemy nie tylko wynik funkcji add ale również całą funkcje
// z której można skorzystać w pliku main.js
