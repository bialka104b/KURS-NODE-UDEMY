const express = require("express");
const app = express();

app.get("/", (request, response)=> {
    response.send("Strona główna!");
});

app.get("/o-nas", (request, response)=> {
    response.send("O nas!");//stworzona ściezka do podstrony o nazwie O-nas
});

app.get("/blog/:date/:id?", (request, response)=> {
    //:date oraz :id to parametry naszej podstrony
    //request.param.id odwołuje się własnie do tych parametrów ścieżki z metody get
    //nasz adres będzie wyglądał np tak http://localhost:8080/blog/2020-01-01/10
    //jeśli któryś z parametrów może być wpisywany ale nie musi to trzeba podac znak zapytania bo inaczej strona będzie wołać wszystkie parametry aby sie poprawnie wczytać
    response.send(`
        Wpis o id ${request.params.id} utworzony ${request.params.date}
        <pre>${JSON.stringify(request.query, null, 4)}</pre>    
    `);//przechodząc pod tą strone dostaniemy JSONA http://localhost:8080/blog/2020-01-01/22?search=text
});

app.get("/blog/:date/:id?", (request, response)=> {
    response.send(`<pre>${JSON.stringify(request.query.search, null, 4)}</pre> `);//tu byśmy dostali sam string "text" bo odwołaliśmy sie do search
});

app.listen(8080, ()=> {
    console.log("Serwer został uruchomiony pod adresem http://localhost:8080");
});