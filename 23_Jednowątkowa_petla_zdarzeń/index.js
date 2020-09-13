function sleep(ms) {//ta funkcja opóźnia synchroniczne działanie reszty kodu w linijce 15
    const now = Date.now();
    while(Date.now() - now < ms) {
        //pętla będzie sie wykonywać tak długo aż wartość milisekund będzie większa od argumentu ms(6000 podane w lini 16)
        //Date.now() pobranie aktualnego czasu
    }
}

console.log("Hello");
console.time("setimeout");//początek liczenia czasu wykonywania sie funkcji
setTimeout(function call_back() {
    console.log("3 sekundy później");
    console.timeEnd("setimeout");//koniec liczenia czasu wykonywania sie funkcji
}, 3000);

sleep(6000);//opóźnienie wykonania funkcji call_back
console.log("world!");