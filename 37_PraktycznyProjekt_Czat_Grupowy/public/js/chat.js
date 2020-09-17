//SKRYPT DZIAŁAJĄCY PO STRONIE KLIENTA
(() => {
  const socket = io.connect("http://localhost:8080/");

  const joinForm = $("#join-form"), //odniesienie za pomocą jQuery
    nick = $("#nick"),
    chatForm = $("#chat-form"),
    chatWindow = $("#chat-window"),
    chatMessage = $("#message");

  joinForm.on("submit", (e) => {
    e.preventDefault();
    const nickName = $.trim(nick.val());

    if (nickName === "") {
      //podano nazwe użytkownika?
      nick.addClass("invalid"); //jeśli nie to dodajemy klase invalid(podświetli pole na czerwono)
    } else {
      nick.removeClass("invalid"); //jeśli tak to usuń klasę invalid i pozwoli nam to wejśc na czat
      console.log(nickName); //wyświetlam wpisany nick
      socket.emit("join", nickName); //nazwa zdarzenia jest tutaj dowolna // wysyłam wiadomosc nazwa nicku
      joinForm.hide(); //ukrywam formularz z wprowadzaniem nicku
      chatForm.show(); //pokazuje formularz czatu
    }
  });

  chatForm.on("submit", (e) => {
    //przycisk wyślij na czacie
    e.preventDefault();
    const message = $.trim(chatMessage.val()); //wiadomość wysyłana na czacie
    //samotny znak dolara oznacza odwołanie nie do documentu
    if (message !== "") {
      socket.emit("message", message);
      console.log(message);
      chatMessage.val("");
    }
  });

  //OBSŁUGA ZDARZENIA STATUS z PLIKU chatExport
  socket.on("status", (data) => {
    //nazwa status jest dowolna ale musi być taka sama ja w pliku chatExport
    //data to będzie obiekt przesłany z serwera z informacją o dołączeniu do czatu

    console.log(data);
  });

  socket.on("message", (msg) => {
    //nasłuchiwanie zdarzenia message
    //nazwa status jest dowolna ale musi być taka sama ja w pliku chatExport
    //data to będzie obiekt przesłany z serwera z informacją o dołączeniu do czatu

    console.log(msg);
  });
})();
