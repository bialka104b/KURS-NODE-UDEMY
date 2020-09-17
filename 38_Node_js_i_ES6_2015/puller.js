const EventEmitter = require("events");
const utils = require("util");

class Puller extends EventEmitter {//extends oznacza że będzie dzidziczyć z EventEmmittera
    constructor(url) {

        super();//ta funkcja odwołuje się do klasy z której dziedziczymy, ten syntax zastępuje EventEmitter.call(this)
        this.url = url;
        this.on("removeListener", ()=> {

            const number = this.listenerCount("data");
            if(number === 0) {
                clearInterval(this.interval);
            }
        });
    }

    pull = ()=> {
        this.interval = setInterval(() => {
            this.emit("data", {
                data: "pobrane dane",
                url: this.url
            });
        }, 1000);
    }

    stop = (cb)=> {
        this.removeListener("data", cb);
    }
}

//PONIŻEJ JEST TEN SAM SYNTAX W WERSJI ES5

// utils.inherits(Puller, EventEmitter);

// function Puller(url) {
//     EventEmitter.call(this);
//     this.url = url;
//     this.on("removeListener", function() {
//         var number = this.listenerCount("data");
//         if(number === 0) {
//             clearInterval(this.interval);
//         }
//     });
// }

// Puller.prototype.pull = function() {
//     var self = this;
//     self.interval = setInterval(function() {
//         self.emit("data", {
//             data: "pobrane dane",
//             url: self.url
//         });
//     }, 1000);
// };

// Puller.prototype.stop = function(cb) {
//     this.removeListener("data", cb);
// };

module.exports = Puller;