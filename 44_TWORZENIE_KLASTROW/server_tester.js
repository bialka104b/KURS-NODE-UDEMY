const http = require("http");

getData = ()=> {

    const req = http.request("http://localhost:8080", (res)=> {//za pomocą modułu http wykonujemy metode request dokonują zapytania pod adres localhost8080

        let data = "";//data to będzie string który nam sie wyświetla na stronie
        res.on("data", (chunk)=> {
            data += chunk.toString();
        });

        res.on("end", ()=> {
            console.log(data);
        });
    });
    req.end();
}

const interval = setInterval(getData, 100);//uruchomiamy funkcje getData co 100ms

setTimeout(()=> {
    clearInterval(interval);
}, 10000);//po 30 sek czyścimy interval aby przestac wysyłać zapytania

//aby zobaczyć efekt działania programu uruchom 2 terminale
//w pierwszym uruchom npm run start1 a w drugim npm run start1s
//index1 musi byc uruchomiony aby ten plik zadziałał