let value = 1;

get= ()=> {
    return value;
}

set = (val)=> {
    value = val;
}

module.exports = {//MAMY TU DO CZYNIENIA ZE SKRÓTEK ES6
    get,// to jest to samo co get:get
    set // to jest to samo co set:set
    //warunkiem skracania jest ta sama nazwa metody(funkcji)
};