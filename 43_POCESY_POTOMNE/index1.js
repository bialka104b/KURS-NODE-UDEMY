const exec = require("child_process").exec;
const spawn = require("child_process").spawn;

//metoda spawn zwróci nam stream
const ping = spawn("ping", ["google.com"]);
//spawn("ping", ["-c", "4", "google.com"]); tylko na mac lub linux

ping.stdout.on("data", (data) => {
  //za każdym razem gdy terminal wyrzuci z pinga stdout będziemy mogli wywołać  zdarzenie "data" i coś z tym zrobić
  console.log(data.toString()); //tu zamieniamy buffer na string
});

ping.stderr.on("data", (data) => {
  //to samo robimy z errorem
  console.log(data.toString());
});

ping.on("close", (code) => {
  //zamykamy
  console.log(`Proces zakońaczył się z kodem ${code}`);
});

//Cały program działa podobnie jak w pliku index.js z metodą exec ale to się dzieje to w czasie rzeczywistym i na pingi nie trzeba czekać bo wykonują się tutaj po 1 pingu

//____________________________________________________________________
// 1. Zbuduj stronę w HTML z poszczególnych szablonów
// 2. Przeładuj stronę w przeglądarceSZY PROGRAM MOŻNA ZASTOSOWAĆ W GULPIE, SŁUŻY ON DO ODŚWIEŻANIA STRONY PO ZBUDOWANIU JUZ STRUKTURY HTML ZA POMOCĄ ZDARZENIA "JEKYLL" TO TRZEBA CHYBA DOINSTALOWAĆ
// BROWSESYNC.RELOADED() TO WŁAŚNIE FUNKCJA PRZEŁADOWANIA PRZEGLĄDARKI, CP TO INACZEJ METODA CHILDPROSESS

// gulp.task("jekyll", (done) => {
//   return cp.spawn("jekyll", ["build"]).on("close", () => {
//     browserSync.reload();
//     done();
//   });
// });
