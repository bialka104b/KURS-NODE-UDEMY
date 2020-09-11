const http = require("http");//moduł http do którego można się podłączyć z przeglądarki internetowej
//moduł HTTP korzysta pod spodem z mudułu NET

const server = http.createServer((request, response)=> {//tworzymy serwer http
    //.createServer(call_back(zapytanie, odpowidź)) funkcja wywoływana dla każdego nowego połączenia
    //request - zapytanie do przeglądarki
    //response - odpowiedź od przeglądarki
    //request i response są to streamy, nazwa tych argumentów jest dowolna jednak trzeba byś świadomym że są to stream-y

    //METODA  do WYSŁANIA INFORMACJI O TREŚCI HTML(wyrenderowania tego na stronie)
    response.writeHead(200, {
        "Content-Type": "text/html"
    });
    //.writeHead(status np 404 lub 200, {dowolny nagłówek obsługuwany przez przeglądarke })
    //NAGŁÓWKI I STATUSY OPISANE W NOTATKACH JAK SPRAWDZIĆ
    //Kiedy skorzystamy z writeHead to nie możemy już później zmieniać nagłówków

    response.write("<h1>Heloooooo</h1>");//to będzie wyświetlone w przeglądarce w tagu <pre> chyba że podamy tag h1
    response.end();//zakończenie pracy serwera
});

server.listen(8000, ()=> {//uruchomienie serwera na porcie 8000
    console.log("Serwer uruchomiony pod adresem http://localhost:8000");
});

//PRZED URUCHOMIENIEM PrzEGlĄDARKI URUCHOM PLIK "node cz1.js"