const Puller = require("./puller");
const puller = new Puller("http://example.com/data/");

printData = (data)=> {
    console.log(`Otrzymane dane: ${data.data} z adresu: ${data.url}`);
}

puller.on("data", printData);
puller.pull();

setTimeout(()=> {
    puller.stop(printData);
}, 5000);