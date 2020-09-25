const exec = require("child_process").exec;
const spawn = require("child_process").spawn;

exec("ping google.com", (err, stdout, stderr)=> {
    //"ping -c 4 google.com" wykonaj 4 pingi tylko na mac lub linux
    //(err, stdout, stderr) - error, standard out(wyrzucone na wyjście), standard error
    if(err) {
        return console.log(err);
    }
    console.log(stdout);
    console.log(stderr);
});

//metoda exec() uruchomi nam proces i będzie bufforować wszystko co proces będzie wyrzucał do stdout i stderr