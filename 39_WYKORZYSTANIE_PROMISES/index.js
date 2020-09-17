const fs = require("fs");
const path = require("path");

// readFile = (file, cb)=> {
//     fs.readFile(path.join(__dirname, "files", file), function(err, data) {

//         if(err) {
//             cb(err);
//         } else {
//             cb(null, data.toString());
//         }
//     });
// }

// readFile("lorem1.txt", (err, data)=> {//to wszystko wpada pod cd z linijki 4
//     if(err) {
//         console.log(`Wystąpił błąd: ${err.message}`);
//     } else {
//         console.log(data);
//     }
// });

//PONIŻEJ TEN SAM KOD Z UŻYCIEM PROMISES


readFile = (file)=> {

    const prom = new Promise((resolve, reject)=> {//Promise obiekt globalnie dostępny
        //resolve wywołujemy gdy jest ok, reject gdy wystąpi błąd
        fs.readFile(path.join(__dirname, "files", file), (err, data)=> {
            if(err) {
                reject(err);
            } else {
                resolve( data.toString() );
            }
        });
    });
    return prom;
}

readFile("lorem1.txt")
    .then((data)=> {//tu tak naprawde zostanie przekazana funkcja resolve
        //then jest dostępne na obiekcie Promise, metoda then tak naprawde zwraca dalej Promise i można dalej z niej korzystać
        

        console.log(data);
        throw new Error("Własny błąd");//ręczne wyrzucenie błędu które zostanie przekierowane do metody catch
        return data;
    }).then((data)=> {
        console.log( data.toUpperCase() );
    })
    .catch((err)=> {//wykona się wtedy kiedy będzie reject czyli jakis błąd
        console.log(`Wystąpił błąd: ${err.message}`);
    });