const fs = require("fs");
const path = require("path");

var users = require("./usersDb");

save = ()=> {
    fs.writeFile(path.join(__dirname, "usersDb.json"), JSON.stringify(users, null, 4));
}

copy = (obj)=> {
    return JSON.parse( JSON.stringify(obj) );
}

getNextId = ()=> {
    var lastUser = users[users.length - 1];
    return lastUser ? lastUser.id + 1 : 1;
}

findUserById = (id)=> {
    var user = null;
    id = parseInt(id);
    users.every((u)=> {
        if(u.id === id) {
            user = u;
            return false;
        }
        return true;
    });
    return user;
}

addUser = (userData)=> {
    userData.id = getNextId();
    users.push(userData);
    save();
    return getUser(userData.id);
}

getUser = (id)=> {
    return copy( findUserById(id) );
}

updateUser = (userData)=> {
    var user = findUserById(userData.id);
    delete userData.id;
    Object.assign(user, userData);
    save();
    return getUser(user.id);
}

deleteUser = (id)=> {
    let user = findUserById(id);
    let index = users.indexOf(user);
    users.splice(index, 1);
    save();
    return copy(user);
}

listUsers = ()=> {
    return copy(users);
}

module.exports = {
    add: addUser,
    get: getUser,
    update: updateUser,
    delete: deleteUser,
    list: listUsers
};