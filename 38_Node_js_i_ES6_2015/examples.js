//sposób wywoływania funkcji podobnej do console log
let o = {
    log(msg) {
        console.log(`Message: ${msg}`);
    }
};
o.log("Hej!");

const mod = require("./module");
mod.set(2);
console.log( mod.get() );