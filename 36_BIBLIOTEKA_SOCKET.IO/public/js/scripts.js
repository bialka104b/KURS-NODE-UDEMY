(()=> {
  const socket = io.connect("http://localhost:8080");
  const form = document.querySelector("#form");
  const message = form.querySelector("input[type='text']");

  form.onsubmit = (e)=> {
    e.preventDefault();
    if (message.value) {
      socket.emit("message", message.value);
      message.value = "";
    }
  };

  socket.on("message", (msg) => {
    //"message" może sie nazywać dowolnie ale powinno być takie samo jak w pliku index.js w tym kodzie co widać tutaj niżej
    // io.on("connection", (socket)=>{
    // socket.on("message", (msg)=>{
    //     socket.emit("message", msg.toUpperCase());//metoda emit(nazwa zdarzenia, to co chcemy odesłać) do wysyłania czegoś do servera
    // })
    // })
    console.log(msg);
  });
})();
