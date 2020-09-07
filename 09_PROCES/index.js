process.stdout.write("Podaj wiadomość\n> ");

process.stdin.on("readable", function(){
    var line = process.stdin.read();
    if(line === null) {
        return;
    }
    if(line.toString().trim() === "close"){
        process.exit();
    }
    console.log(line + "przykladowy kod");
    process.stdout.write(`wpisałeś : ${line}`);
});