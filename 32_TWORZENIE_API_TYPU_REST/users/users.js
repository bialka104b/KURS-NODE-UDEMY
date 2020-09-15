const fs = require("fs");
const path = require("path");
const users = require("./usersDb.json"); //plik JSON z danymi osób, id name last name

save = () => {
  //metoda do zapisywania informacji z powrotem do pliku userDb.json aby przy nastepnym wczytywaniu(uruchomieniu serwera) te informacje zostały zachowane
  fs.writeFileSync(path.join(__dirname, "usersDb.json"), JSON.stringify(users, null, 4));
};

copy = (object) => {
  //cel tej metody jest taki by wziąść string(object), zamienić go na JSON (JSON.stringify(obj))
  //następnie tego JSONA z powrotem zamienić na pełnoprawny obiekt JS, jednak będzie to już kopia tego obiektu
  //zabezpieczamy się żeby nie nadpisywać users
  //dzięki temu w pliku index.js będzie tu można stworzy liste na obiekcie users: users.list()
  return JSON.parse(JSON.stringify(object));
};

getNextId = () => {
  let lastUser = users[users.length - 1];
  return lastUser ? lastUser.id + 1 : 1;
};

findUserById = (id) => {
  //metoda wyszukuje użytkowników o podanym id w pliku userDb.json który był wczytany wcześniej do pamięci
  let user = null;
  id = parseInt(id);
  users.every((u) => {
    //pod users mamy cały json z obiektami
    if (u.id === id) {
      user = u;
      //pod user mamy obiekt z podanym id np 3{ id: 3, name: 'Tomasz', lastName: 'Janicki' }

      return false;
    }
    return true;
  });
  return user;
};

addUser = (userData) => {
  userData.id = getNextId();
  users.push(userData);
  save();
  return getUser(userData.id);
};

getUser = (id) => {
  //metoda gdzie podaje się jakieś id i zwróci nam użytkownika o tym id
  return copy(findUserById(id)); //wykorzystuje tutaj metode copy i findUserById
  //np  getUser(3) zwróci { id: 3, name: 'Tomasz', lastName: 'Janicki' }
};

updateUser = (userData) => {
  //aktualizowanie użytkowników
  let user = findUserById(userData.id); //znajduje dany obiekt z odpowiednim id
  // console.log(user);
  // console.log(userData);
  delete userData.id; //usuwanie danych o tym id
  Object.assign(user, userData); //aktualizacja uzytkownika
  save();
  return getUser(user.id); //zwracam uzytkownika
};

deleteUser = (id) => {
  let user = findUserById(id);
  let index = users.indexOf(user);
  users.splice(index, 1);
  save();
  return copy(user);
};

listUsers = () => {
  //metoda zwraca nam liste users za pomocą stworzonych kopiii users(metoda copy z linijki 9)
  return copy(users);
};

module.exports = {
  //export tych funkcji które tutaj zostały napisane - klucz: nazwa funkcji
  add: addUser,
  get: getUser,
  update: updateUser,
  delete: deleteUser,
  list: listUsers,
};
