<div align="center" id="top"> 
  <!-- <img src="./.github/app.gif" alt="Kurs Node Udemy" /> -->
  &#xa0;
  <!-- <a href="https://kursnodeudemy.netlify.app">Demo</a> -->
</div>
<h1 align="center">Kurs Node Udemy</h1>

<p align="center">
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/bialka104b/kurs-node-udemy?color=56BEB8">
</p>

<!-- Status -->

<!-- <h4 align="center">
	🚧  Kurs Node Udemy 🚀 Under construction...  🚧
</h4>
-->

TO REPOZYTORIUM JEST DO UŻYTKU PRYWATNEGO

<hr>

## :dart: About

KURS UDEMY<br>
<a href="https://www.udemy.com/course/kurs-nodejs-w-praktyce/learn/lecture/11811986?start=300#content">NodeJS - poznaj podstawy back-endu i zostań Full Stackem</a><br>
Autor eduweb.pl

## :sparkles: Features

<h3><span>:turtle:katalog 06 ZDARZENIA:turtle:</span></h3>

- Tworzenie zdarzeń
- Wywoływanie zdarzeń
- Tworzenie klas które pobierają cos z internetu (API) i przesyłają dalej
- Event Emitter

<h3><span>:ant: katalog 07 BUFFER :ant:</span></h3>

- Bufor który przechowuje określoną liczbę bajtów, surowych danych binarnych
- Nie trzeba go importować
- Służy do kodowania znaków np polskich

<h3><span>:octopus: katalog 08 STREAM :octopus:</span></h3>

- jest to pewnego rodzaju klasa napisana w Node.js;
- jego zadaniem jest ograniczenie zużycia pamięci;
- dziedziczy z modułów EventEmitter;>
- rodzaje streemów:
  -- odczytywalny (readable);<br>
  -- odczytywalno zapisywalny (duplex);<br>
  -- transformacyjny (transform) - dane wchodzą, są zmieniane i wychodza nowe dane;<br>
  -- zapisywalny (writeable);

```
process.stdout.write("Hello world");
```

<h3><span>:whale: katalog 09 PROCES :whale:</span></h3>

- zabijanie procesu w node;
- `process.pid;`
- uruchamianie pliku index.js bez REPLA

<a id="10" href="#top">Back to top</a>

<h3><span>:cow2: katalog 10 READLiNE :cow2:</span></h3>

- czyszczenie interfejsu
- czyszczenie lini
- przesuwanie kursora
- `.createInterface({})`
- `.close()`
- program losowanie nagród z tablicy;

<h3><span>:bird: katalog 11 ODCZYTYWANIE INFORMACJI O PLIKACH :bird:</span></h3>

- `fs.exist()` - czy dany plik istnieje
- `fs.stat()` - czy dany plik istnieje
- `path.join()` - łączenie ścieżki w string
- funkcja error-first-callback
- `err.message` - wyświetlanie błędów
- `fs.readdir()` - odczytaj ścieżkę katalogu
- `stats.birthtime` - data utworzenia pliku
- `stats.mtime` - data ostatniej modyfikacji pliku
- `stats.isFile` - (boolean) czy coś jest plikiem, czy plik istnieje
- `stats.isDirectory` - (boolean) czy folder istnieje

<a id="12" href="#10">Back to 10</a>

<h3><span>:elephant: katalog 12 ODCZYTYWANIE PLIKÓW :elephant:</span></h3>

- `.toString("utf-8")` - metoda do odkodowywania buffera na string
- ODCZYTYWANIE ASYNCHRONICZNE: `fs.readFile(ścieżka do pliku, "utf-8", callback);`
- ODCZYTYWANIE SYNCHRONICZNE: `const plik = fs.readFileSync(ścieżka do pliku); console.log(plik.toString("utf-8"));`
- ODCZYTYWANIE ZA POMOCĄ STREMÓW: `.createReadStream(ścieżka do pliku, {obiekt konfiguracyjny do odkodowywania})`

<h3><span>:monkey_face: katalog 13 TWORZENIE KATALOGÓW I PLIKÓW :monkey_face:</span></h3>

- `fs.mkdir()` - tworzenie katalogu
- `fs.writeFile()` - tworzenie pliku wraz z treścią
- `fs.appendFile()` - tworzenie pliku wraz z treścią lub nadpisywanie pliku
- `fs.mkdtemp()` - tworzenie katalogu za każdym razem o innej nazwie
- `fs.mkdtempSync()` - tworzenie katalogu za każdym razem o innej nazwie, metoda synchroniczna
- `.write()` nadpisywanie pliku
- `.end() nadpisywanie` i zamykanie pliku
- `.on("finish", callback)` kopiowanie treści i wywołanie czegoś w callback
- `lorem1.pipe(lorem2)` - zapisywanie skopiowanego tekstu z pliku lorem1 do lorem2 (lorem1 i 2 są streamami)

<a id="14" href="#12">Back to 12</a>

<h3><span>:sheep: katalog 14 ODCZYTYWANIE PLIKÓW :sheep:</span></h3>

- `fs.rename()` zmiana nazwy pliku
- funkcja(moduł) własna do przenoszenia pliku do innego folderu

<h3><span>:elephant: katalog 15 ODCZYTYWANIE PLIKÓW :elephant:</span></h3>

- `fs.rmdir()` - usuwanie katalogów
- `fs.readdir()` metoda do odczytywania wszystkich plików znajdujących się w katalogu o podanej ścieżce
- `err.code` - wyświetlenie nazwy błędu
- `fs.unlink()` - metoda do usuwania pliku
- BŁĄD `"ENOTEMPTY"` - chcemy usunąc katalog który nie jest pusty

<a id="16" href="#14">Back to 14</a>

<h3><span>:horse: katalog 16 ODCZYTYWANIE PLIKÓW :horse:</span></h3>

- `fs.wach()` - metoda która nasłuchuje zmiane w treściach plików lub nazwach plików, wykona się za każdym razem gdy nastapi zmiana
- `fs.readFile()` - odczytywanie pliku
- `fs.writeFile()` - zapisywanie danych do pliku
- `.toUpperCase()` - zamienia małe litery tekstu na duże

<h3><span>:baby_chick: katalog 17 PROJECT GRUPOWA ZMIANA NAZW PLIKÓW CZ.1 :baby_chick:</span></h3>

- `.slice(2)` - ocinanie dwóch pirwszych elementów tablicy lub stringu
- `.get()` - metoda do pobierania argumentu
- `.validate([])` - metoda do sprawdzenia czy wszystkie argumentyzostały podane
- `.indexOf()` - sprawdzenie pod jakim indeksem znajduje się element w tablicy
- `module.export = {}` sposób exportowania kilku funkcji w jednym obiekcie
- `.filter()` - metoda filtruje tablice wg podanego argumentu i zwraca nową odfiltrowaną tablice
- `.extname()` - metoda zwraca rozszerzenie pliku o podanej ścieżce

<a id="18" href="#16">Back to 16</a>

<h3><span>:whale: katalog 18 PROJECT GRUPOWA ZMIANA NAZW PLIKÓW CZ.2 :whale:</span></h3>

- `validateArgs(args){}` funkcje do walidowania czy wszystkie argumenty zostały podane
- `.replace()` metoda do zamiany liter lub znaków
- `.repeat(ile razy powtórzyć)` funkcja do powtarzania znaków
- `.birthtime.getTime()` zwraca liczbe milisekund od momentu utworzenia pliku
- funkcjonalność: grupowa zamiana nazw plików za pomocą komendy z terminala (funkcje newFileName validFiles sortByDate)
- `fs.statSync(nazwa i ścieżka pliku)` synchgroniczne odczytywanie danych z pliku

<h3><span>:turtle: katalog 19 PROSTY SERWER I KLIENt TCP :turtle:</span></h3>

- TWORZYMY SERWER NISKIEGO POZIOMU TCP IP
- MODUŁ NET odpowiedzialny za komunikacje sieciową w NODE
- `net.createServer(callback)` tworzenie serwera
- `setInterval(()=> {},1000)` wykonywanie funkcji co 1 sekunde
- `clearInterval()` czyszczenie interval aby zatrzymac czas wykonywania się funkcji callback
- `.end()` kończenie działania serwera
- `server.listen(8080, ()=> {})` uruchomienie serwera na porcie 8080
- `net.connect({port: 8080})` podpięcie nowego klienta do serwera o porcie 8080
- `.on("data", (data)=>{})` zdarzenie on data do odbierania danych przez klienta lub serwer

<a id="20" href="#18">Back to 18</a>

<h3><span>:ant: katalog 20 SERWER HTTP :ant:</span></h3>

- `http.createServer((request, response)=> {})` stworzenie serwera HTTP
- `.writeHead(status 200, Content Type)` metoda do wysyłania czegoś na serwer HTTP w postaci html, tekstu lub obrazu
- `.setHeader("Content-Type", "text/html")` podobnie jak writeHead, tylko nie podajemy statusu, można ją wywoływać wielokrotnie
- `JSON.stringify()` zamiana obiektu na Json
- `request.httpVersion` wersja http
- `request.url` końcówka strony, podstrona
- `request.headers ` nagłówki request
- `request.method` metody HTTP np GET POST DELETE

<h3><span>:octopus: katalog 21 SERWOWANIE STATYCZNYCH PLIKÓW HTTP :octopus:</span></h3>

- TWORZENIE SERWERA HTTP i URUCHOMIENIE GO
- RODZAJE MIME TYPE
- `fs.createReadStream(ścieżka do pliku)` metoda zwraca strema
- `file.pipe(response)` za pomoca pipe odczytujemy(kopiujemy) stream do naszego response

<a id="22" href="#20">Back to 20</a>

<h3><span>:whale: katalog 22 SERWER HTTPS :whale:</span></h3>

- GENEROWANIE DARMOWYCH CERTYFIKATÓW https://www.selfsignedcertificate.com/
- `.readFileSync()` zastosowanie metody synchronicznej do odczytywania KLUCZA i CERTYFIKATU protokołu HTTPS
- TWORZENIE SERWERA HTTPS, wraz z dodaniem tego klucza i certyfikatu

<h3><span>:cow2: katalog 23 JEDNOWĄTKOWA PĘTLA ZDARZEŃ :cow2:</span></h3>

- ZASTOSOWANIE FUNKCJI `sleep()` DO OPUŹNIANIA WYKONANIA SIĘ ASYNCHRONICZNYCH FUNKCJI
- `console.time("dowolny string")` start liczenia czasu wykonywania sie funkcji
- `console.timeEnd("dowolny string")` koniec liczenia czasu wykonywania sie funkcji
- MODUŁ `querystring`, wykorzytsanie: .query
- `.parse()` parsowanie danych

<a id="24" href="#22">Back to 22</a>

<h3><span>:bird: katalog 24 INSTALACJA MODUŁÓW :bird:</span></h3>

- zainicjalizowano npm `npm init`
- zainstalowano paczke DEL ` npm i del`
- MODUŁ DEL SŁUŻY DO USUWANIA KATALOGÓW I PLIKOW
- INSTALACJA DEL JAKO ZALEŻNOŚĆ DEPENDENCIES Z WYBRANĄ WERSJĄ `npm i del@2.2.0 --save`

<h3><span>:elephant: katalog 25 INSTALACJA GLOBALNA MODUŁÓW :elephant:</span></h3>

- MODUŁ NODEMON DO RESTARTOWANIA SERWERA (WCZYTYWANIA PLIKÓW NA NOWO)
- INSTALACJA GLOBALNA NODEMON: "npm init" a następnie "npm i -g nodemon"
- URUCHOMIENIE PLIKU ZA POMOCĄ NODEMON - KONFIGURACJA package.json
- MODUŁ JSHINT do WALIDACJI PLIKU(SPAWDZANIA BŁĘDÓW W PLIKU), INSTALACJA
- JAK SPRAWDZIĆ GDZIE GLOBALNIE SĄ INSTALOWANE NASZE MODUŁY?
  -- `npm root -g` sprawdzamy instalowane GLOBALNIE
  -- `npm root` sprawdzamy instalowane lokalnie

<a id="26" href="#24">Back to 24</a>

<h3><span>:monkey_face: katalog 26 AKTUALIZACJA MODUŁÓW :monkey_face:</span></h3>

- `npm install del@5.0.0 --save (DEPENDECIES)` INSTALACJA MODUŁU DEL W WERSJI 5.0.0
- `npm update --save` AKTUALIZACJA ZAINSTALOWANYCH WERSJI JEŚLI ZMIENIA SIĘ TYLKO 2 I 3 NUMER WERSJI
- `npm update -g --save` AKTUALIZACJA GLOBALNA
- `npm outdated` SPRAWDZENIE OBECNIE NIEZAKTUALIZOWANYCH WERSJI
- `npm outdated -g` SPRAWDZENIE GLOBALNE

<h3><span>:sheep: katalog 27 INSTALACJA EXPRESS I PROSTY SERWER EXPRESSJS :sheep:</span></h3>

- https://expressjs.com/en/4x/api.html DOKUMENTACJA EXPRESS
- INSTALACJA:
  -- `npm init` oraz `npm install express --save`
- WYŁĄCZANIE NAGŁÓWKÓW W ZAKŁADCE NETWORK NP. X-Powered-By: Express
- `.disable("x-powered-by")` METODA DO WYŁĄCZANIA RÓZNYCH OPCJI
- `.removeHeader("X-Powered-By")` METODA DO WYŁĄCZANIA NAGŁÓWKÓW
- `response.send("Hello World!")` METODA DZIAŁAJĄCA PODOBNIE JAK .WRITE() W expressJS

<a id="28" href="#26">Back to 26</a>

<h3><span>:horse: katalog 28 SERWOWANIE STATYCZNYCH PLIKÓW W EXPRESS :horse:</span></h3>

- EXPRESS STATIC DOKUMENTACJA http://expressjs.com/en/5x/api.html#express.static
- `express.static("public")` serwowanie statycznych plików za pomoca express

<h3><span>:baby_chick: katalog 29 ROUTING ZAPYTAŃ W EXPRESS JS :baby_chick:</span></h3>

- W JAKI SPOSÓB KORZYSTAĆ Z ROUTINGU CZYLI PRZYPISYWANIA ODPOWIEDNICH FUNKCJI DO ODPOWIEDNICH ŚCIEŻEK
- manipulacja ścieżkami i parametrami z jakąś datą i id http://localhost:8080/blog/2020-01-01/22?search=text
- wyświetlenie na stronie JSONA a w nim {search:"text"}

<h3><span>:whale: katalog 30 KORZYSTANIE Z SZABLONÓW W EXPRESS JS :whale:</span></h3>

- JAK DZIAŁAJĄ handlebars
- łączenie wielu kontentów w jeden za pomocą plik.handlebars
- renderowanie plików handlebar do naszej przeglądarki
- SKŁADNIA PODOBNA DO HTML
- instalacja modułu `express-handlebars`

<h3><span>:turtle: katalog 31 UŻYCIE MIDDLEWARE W EXPRESS JS :turtle:</span></h3>

- Czym w EXPRESS SĄ MIDDLEWARE?
- moduł `serve-index` do serwowania obrazków na stronie
- obsługa serwera z dostępem administratora (alternatywa dla metody POST)


## :rocket: Technologies

The following tools were used in this project:

- [Node.js](https://nodejs.org/en/)

## :white_check_mark: Requirements

Before starting :checkered_flag:, you need to have [Git](https://git-scm.com) and [Node](https://nodejs.org/en/) installed.

## :checkered_flag: Starting

```bash
# Clone this project
$ git clone https://github.com/bialka104b/kurs-node-udemy

```

<a href="#top">Back to top</a>
