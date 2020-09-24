const path = require("path");
const readFile = require("./readfile3").readFile;
const readFileSync = require("./readfile3").readFileSync;

readFile(path.join(__dirname, "files", "lorem1.txt"), (err, data)=>{
    if(err) {
        console.log("Błąd: " + err.message);
    } else {
        console.log(data);//wyświetlam dane jako buffer
    }
})