const express = require("express"); //importujemy moduł express
const app = express(); //wywołanie funkcji z modułu express, od teraz pod app będziemy mieli aplikacje

//KONFIGURACJA APLIKACJI
app.disable("x-powered-by");// W NAWIASIE PODAJEMY CO CHCEMY WYŁĄCZYĆ, LISTA TYCH RZECZY JEST POD LINKIEM W NOTATKACH

//tworzenie ścieżki routingu
app.get("/", (request, response) => {
  //get("adres pod jaki chcemy wykonać te funkcj czyli w naszym przypadku strona główna, call_back(taki sam jak tworzyliśmy przy tworzeniu serwera createServer)")

  response.removeHeader("X-Powered-By"); //USUWANIE NAGŁÓWKA X-Powered-By: Express Z TEGO CO SIE WYŚWIETLA W ZAKŁADCE NETWORK
  response.send("Hello World!"); //działa podobnie jak metoda .write(), można też podawać buffery
  //metoda zadba o samoistne zamykanie się tak jak w przypadku metody .end()
});

//URUCHOMIENIE SERWERA (APLIKACJI) NA PORCIE 8080
app.listen(8080, () => {
  console.log("Serwer został uruchomiony pod adresem http://localhost:8080");
});

//EXPRESS DBA O TO BY ZWRÓCIĆ ODPOWIEDNI STATUS CODE W SYTUACJI GDY WPISZEMY W NASZ URL COŚ WIĘCEJ NP. http://localhost:8080/style.css
//JEŻELI TAKIEGO PLIKU NIEMA TO W PRZEGLĄDARCE W ZAKŁADCE NETWORK OTRZYMAMY STYLE.CSS STATUS 404
