const cluster = require("cluster");
const app = require("express")();

//cluster.fork();//zostanie uruchomiony nowy proces z tym co już mamy poniżej

if(cluster.isMaster) {//sprawdzamy czy proces który tworzymy jest procesem master(czyli czy jest głównym procesem)
    console.log("Proces główny")
    cluster.fork();//powoduje że else też zostanie uruchomione ponieważ zostanie ono uruchomione w nowym procesie
    //cluster.fork() uruchamia nową instancje procesu if else, w której nie ma cluster.isMaster dlatego program przechodzi do else
    //można uruchomić tyle procesów ile mamy rdzeni procesora

    //TWORZENIE PĘTLI KTÓRA URUCHOMI 4 KLASTRY DLA 4 RDZENI PROCESORA(po 1 klastrze dla każdego)
    let cpus = require("os").cpus().length;
    for(let i = 0; i < cpus; i++) {//uruchomienie 4 serwerów
        console.log(i);
        cluster.fork();
    }
} 
else {//jeżeli nie jest master to wykonaj

    const app = require("express")();//wywołujemy tutaj bo chcemy wywołac tylko 1 raz
    app.get("/", (req, res)=> {
        res.send(`Witaj! To zapytanie obsługuje process o PID: ${process.pid}`);
    });
    
    app.listen(8080, ()=> {
        console.log(`Serwer został uruchomiony pod adresem http://localhost:8080 i jest obsługiwany przez process o PID: ${process.pid} hehe`);
    });
}

