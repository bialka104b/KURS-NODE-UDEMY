
(function () {
  var wiadomosc = "Moduł add.js";

  console.log(wiadomosc);

  function add(n1, n2) { //na to skieruje "komentarz 1"
    return n1 + n2;
  }

  window.add = add; //tworzenie dostępu do funkcji add za pomocą obiektu globalnego window
  //po znaku równości wpisujemy nazwe funkcji na którą chcemy wskazać z komentarza 1
})();

//powyżej funkcja anonimowa do której wkleiliśmy jakies operacje
//taką funkcje tworzymy aby funkcja wiadomosc nie była dostępna w innyc plikach
// funkcja add tez nie będzie dostępna w pliku main.js
//aby to zmienic trzeba się odwołać poprzez obiekt window.add



//SZABLON FUNKCJI ANONIMOWEJ
/*
(function (exports, require, module, __filename, __dirname) {

    nasze operacje

})({});

*/