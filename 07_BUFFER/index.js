var buffer = Buffer.from("W tym zdaniu są jakieś polskie znaki.", "utf8") 
//nie korzystamy z wersji new Buffer już
//buffer to coś w rodzaju wbudowanej klasy

console.log(buffer); //wyświetlamy zmienną buffer, po wyświetleniu dostaniemy liczby co oznacza że bufor nie jest stringiem
//Zwrócono <Buffer 57 20 74 79 6d 20 7a 64 61 6e 69 75 20 73 c4 85 20 6a 61 6b 69 65 c5 9b 20 70 6f 6c 73 6b 69 65 20 7a 6e 61 6b 69 2e>

console.log(buffer.toString());//korzystamy z metody toString() aby zrobic z buffera string
// Zwrócono - W tym zdaniu są jakieś polskie znaki.

buffer.write("Lorem ipsum");//metoda która próbuje cos do buffera dodać
//wywołujemy
console.log(buffer.toString());
// zwrócono - Lorem ipsumu są jakieś polskie znaki.
//Jak widać niektóre znaki zostały zastąpione bo nie da się nadpisac buffora bo liczba znaków w nim jest stała