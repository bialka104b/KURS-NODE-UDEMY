const path = require("path"); //import modułu path z dokumentacji node
const util = require("util"); //import modułu util z dokumentacji node

// symbol %s oznacza że w to miejsce chcemy podstawić string
// util.format działa podobnie jak printfn w PHP
// path.basename(__filename) jest to metoda która zwróci nam nazwe pliku z podanej ścieżki. 
// Można podać string lub zmienną __filename
var log = util.format("Nazwa pliku to %s", path.basename(__filename));

console.log(log);