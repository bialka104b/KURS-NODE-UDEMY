const { ObjectId } = require("mongodb");
const mongoose = require("mongoose"); //doinstalowany moduł, zastępuje fs i path
const nameAndPassword = "hasłoINazwaKolekcji";
const nazwaBazyDanych = "nazwaBazyDanych";
const options = {
  //ustawiłam te opcje ponieważ krzyczał sobie jakieś błędy
  useUnifiedTopology: true,
  useNewUrlParser: true,
};
mongoose.connect(
  `mongodb+srv://marta:${nameAndPassword}@${nazwaBazyDanych}.z0ca1.mongodb.net/${nameAndPassword}?retryWrites=true&w=majority`,
  options
); //podpięcie do bazy danych mongoose

let schema = new mongoose.Schema({
  //dodajemy tutaj to co w naszych dokumentach jest zdefiniowane czyli name i last Name
  name: String, //trzeba tu podac typ zmiennej
  lastname: String
});

//Tworzymy konstruktor
const User = mongoose.model("users", schema); //model(nazwa modelu, przekazujemy schema czyli lastName i name)
//od teraz możemy tworzyc nowe obiekty typu User

addUser = (userData, cb) => {
  var user = new User(userData);
  user.save((err, user)=>{
    if (err) {
      cb(err);
    } else {
      cb(null, user);
    }
  });
};

getUser = (id, cb) => {
  User.findById(id).exec((err, user)=>{
    if (err) {
      cb(err);
    } else {
      cb(null, user);
    }
  });
};

updateUser = (userData, cb) => {
  //aktualizowanie użytkowników
  let id = userData.id; 
  delete userData.id; 
  User.findByIdAndUpdate(id, userData).exec((err, user)=>{
    if (err) {
      cb(err);
    } else {
      cb(null, user);
    }
  })
};

deleteUser = (id) => {
  User.findByIdAndRemove(id).exec((err, user)=>{
    if (err) {
      cb(err);
    } else {
      cb(null, user);
    }
  })
};

listUsers = (cb)=> {
  User.find({}).exec((err, users) => {
    //szukamy w bazie danych takiego obiektu jaki jest podany argument np. {name: "Tomasz"}
    if (err) {
      return cb(err);
    } else {
      return cb(null,users);
    }
  });
};

module.exports = {
  add: addUser,
  get: getUser,
  update: updateUser,
  delete: deleteUser,
  list: listUsers,
};
