const http = require("http");//moduł http do którego można się podłączyć z przeglądarki internetowej
//moduł HTTP korzysta pod spodem z mudułu NET

const server = http.createServer((request, response)=> {//tworzymy serwer http
    //.createServer(call_back(zapytanie, odpowidź)) funkcja wywoływana dla każdego nowego połączenia
    //request - zapytanie do przeglądarki
    //response - odpowiedź od przeglądarki
    //request i response są to streamy, nazwa tych argumentów jest dowolna jednak trzeba byś świadomym że są to stream-y

    response.statusCode = 200;//tu ustawiamy status code
    response.setHeader("Content-Type", "text/html");
    //.setHeader() TA METODA różni się tym od .writeHead, że nie podajemy statusu 200 oraz tym że pozwala nam ustawiać nowe nagłówki za pomocą kolejnych metod setHeader
    
    response.write("<h1>Heloooooo</h1>");//(body);//to będzie wyświetlone w przeglądarce w tagu <pre>
    response.end();//zakończenie pracy serwera
});

server.listen(8000, ()=> {//uruchomienie serwera na porcie 8000
    console.log("Serwer uruchomiony pod adresem http://localhost:8000");
});