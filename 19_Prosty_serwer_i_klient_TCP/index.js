const fs = require("fs");//moduł file system
const net = require("net");//moduł NET

//TWORZENIE SERWERA za pomocą metody .createSerwer
const server = net.createServer((socket)=> {//funkcja wykona sie za każdym razem gdy podłączy sie do niego jakiś klient
// socket to argument oznaczający podłączonego klienta
// socket dziedziczy z EventEmittera metody i jest streamem
    
    //socket.write("Hello world"); //za każdym razem gdy funkcja się wykona możemy wysłać do klienta ten komunikat
    //socket.end("Hello_world");//kończymy połączenie aby proces nie wisiał w nieskończonośc
    //zamist pisać hello word w write, można to zrobic od razu w metodzie end()
    let counter = 0;
    let interval = setInterval(()=> {

        if(counter === 10) {//jeśli counter będzie 10 to:
            clearInterval(interval);//czyścimy nasz interval abu sie juz nie wykonywał
            socket.end();//kończymy działanie serwera
            return;
        }

        socket.write( String(++counter) );//co sekunde do klienta będziemy wysyłać zwiększona liczbę o 1
        //zastosowano String() ponieważ socket jest stramem a tam mozna przekazywać tylko buffery lub stringi

    }, 1000);//ta funkcja ma sie wykonywac co sekunde

    socket.on("data", (data)=> {//otrzymujemy dane od klienta w postaci buffera
        console.log(data.toString());//dlatego musimy wykonać metode toString by buffer zamienić na string
    });
});

server.listen(8080, ()=> {//uruchomienie serwera na porcie 8080
    console.log("Serwer zostal uruchomiony pod adresem 127.0.0.1:8080");
    //funkcja wywoła się kiedy poprawnie taki serwer zostanie uruchomiony
    //127.0.0.1 to jest nr id localhosta
});

const client = net.connect({port: 8080});//podpięcie nowego klienta do serwera o porcie 8080
//warunkiem podłączenia jest już działający serwer dlatego kod piszemy niżej uruchomienia serwera
//ZARÓWNO KLIENT JAK I SERWER DZIEDZICZĄ Z EventEmittera

client.setEncoding("utf-8");//ustawienie kodowania aby do client wpadały dane kodowane utf8, można to też zrobić w linijce 27
client.on("data", (data)=> {//za każdym razem gdy serwer nam coś wyśle wywołujemy funkcje
//.on(zdarzenie dane, przesyłana treść danych )
    fs.appendFile("./data.txt", data + "\n", (err)=>{//chcemy zapisać te dane do nowego pliku
        if(err) console.log('error', err);//metoda.appendFile wymaga funkcji error-first-callback
    });//.appendFile(ścieżka do pliku, dane do zapisania, err-first-callback)
    

    client.write("Otrzymałem dane: " + data);//tą treść będzie otzymywał klient i za każdym razem w pliku data.txt pojawi sie nowa liczba counter
    //client pisze że otrzymał dane o treści(w postaci buffera), te dane zostaną przekazane jako zdarzenie do socket w linijce 26
    //tak aby serwer mógł dostać odpowiedź od klienta
});

client.on("close",()=> {//po wszystkim kończymy połączenie z serwerem z apomoca wywołania zdarzenia close
    console.log("Zakończono połączenie z serwerem.");
});