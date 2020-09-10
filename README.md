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

<h3>katalog 06 ZDARZENIA</h3>:turtle:
- Tworzenie zdarzeń
- Wywoływanie zdarzeń
- Tworzenie klas które pobierają cos z internetu (API) i przesyłają dalej
- Event Emitter

:ant: <h3>katalog 07 BUFFER</h3>
- Bufor który przechowuje określoną liczbę bajtów, surowych danych binarnych
- Nie trzeba go importować
- Służy do kodowania znaków np polskich

:octopus: <h3>katalog 08 STREAM</h3>
- jest to pewnego rodzaju klasa napisana w Node.js;
- jego zadaniem jest ograniczenie zużycia pamięci;
- dziedziczy z modułów EventEmitter;>
- rodzaje streemów:
  -- odczytywalny (readable);
  -- odczytywalno zapisywalny (duplex);
  -- transformacyjny (transform) - dane wchodzą, są zmieniane i wychodza nowe dane;
  -- zapisywalny (writeable);

```
process.stdout.write("Hello world");
```

:whale: <h3>katalog 09 PROCES</h3>
- zabijanie procesu w node;
- process.pid;
- uruchamianie pliku index.js bez REPLA;

:cow2: <h3>katalog 10 READLiNE</h3>
- czyszczenie interfejsu
- czyszczenie lini
- przesuwanie kursora
- .createInterface({})
- .close
- program losowanie nagród z tablicy

:bird: <h3>katalog 11 ODCZYTYWANIE INFORMACJI O PLIKACH</h3>
- fs.exist() - czy dany plik istnieje
- fs.stat() - czy dany plik istnieje
- path.join() - łączenie ścieżki w string
- funkcja error-first-callback
- err.message - wyświetlanie błędów
- fs.readdir() - odczytaj ścieżkę katalogu
- stats.birthtime - data utworzenia pliku
- stats.mtime - data ostatniej modyfikacji pliku
- stats.isFile - (boolean) czy coś jest plikiem, czy plik istnieje
- stats.isDirectory - (boolean) czy folder istnieje

:elephant: <h3>katalog 12 ODCZYTYWANIE PLIKÓW</h3>

- .toString("utf-8") - metoda do odkodowywania buffera na string
- ODCZYTYWANIE ASYNCHRONICZNE: fs.readFile(ścieżka do pliku, "utf-8", callback);
- ODCZYTYWANIE SYNCHRONICZNE: const plik = fs.readFileSync(ścieżka do pliku); console.log(plik.toString("utf-8"));
- ODCZYTYWANIE ZA POMOCĄ STREMÓW: .createReadStream(ścieżka do pliku, {obiekt konfiguracyjny do odkodowywania});

:monkey_face: <h3>katalog 13 ODCZYTYWANIE PLIKÓW</h3>
- fs.mkdir() - tworzenie katalogu
- fs.writeFile() - tworzenie pliku wraz z treścią
- fs.appendFile() - tworzenie pliku wraz z treścią lub nadpisywanie pliku
- fs.mkdtemp() - tworzenie katalogu za każdym razem o innej nazwie
- fs.mkdtempSync() - tworzenie katalogu za każdym razem o innej nazwie, metoda synchroniczna
- .write() nadpisywanie pliku
- .end() nadpisywanie i zamykanie pliku
- .on("finish", callback) kopiowanie treści i wywołanie czegoś w callback
- lorem1.pipe(lorem2) - zapisywanie skopiowanego tekstu z pliku lorem1 do lorem2 (lorem1 i 2 są streamami)

:racehourse: <h3>katalog 14 ODCZYTYWANIE PLIKÓW</h3>
- fs.rename() zmiana nazwy pliku
- funkcja(moduł) własna do przenoszenia pliku do innego folderu

:racehourse: <h3>katalog 15 ODCZYTYWANIE PLIKÓW</h3>
- fs.rmdir() - usuwanie katalogów
- fs.readdir() metoda do odczytywania wszystkich plików znajdujących się w katalogu o podanej ścieżce
- err.code - wyświetlenie nazwy błędu
- fs.unlink() - metoda do usuwania pliku
- BŁĄD "ENOTEMPTY" - chcemy usunąc katalog który nie jest pusty

:racehourse: <h3>katalog 16 ODCZYTYWANIE PLIKÓW</h3>
- fs.wach() - metoda która nasłuchuje zmiane w treściach plików lub nazwach plików, wykona się za każdym razem gdy nastapi zmiana
- fs.readFile() - odczytywanie pliku
- fs.writeFile() - zapisywanie danych do pliku
- .toUpperCase() - zamienia małe litery tekstu na duże

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
