/* 1.Create a file with class "User" that has username, password, age, isActive, and date created properties
2. create 10 users and write them to json file with filesystem
3. create a function that creates a new user
4. create a function that sets to inactive all users that are registered for more than one day and writes the data on the filesystem
5. create a function that for given username deletes the user
6. create a function that deletes all inactive users*/

const { User } = require("./helper");
const fs = require("fs");
const path = require("path");
const fileName = path.join(__dirname, "users.json");

let users = [];

users.push(new User("Marko", "password123", 19, true, "06.03.2023"));
users.push(new User("Nikola", "bestPassword", 19, true, "06.03.2023"));
users.push(new User("Ivan", "newPassword", 23, true, "06.03.2023"));
users.push(new User("Zoran", "makedonija", 55, true, "01.02.2023"));
users.push(new User("Goran", "Goce", 43, true, "06.03.2023"));
users.push(new User("Cacko", "k-15", 60, true, "10.12.2000"));
users.push(new User("Mile", "Panika", 50, true, "25.06.2020"));
users.push(new User("Stojan", "lozinka", 70, true, "22.10.2012"));
users.push(new User("Filip", "FilipCar", 15, true, "06.03.2023"));
users.push(new User("Dejvid", "Dejvidcoo", 12, true, "06.03.2023"));

fs.writeFileSync(fileName, JSON.stringify(users));
//
//
//
const CreatNewUser = (username, password, age, isActive, dateCreated) => {
  users.push(new User(username, password, age, isActive, dateCreated));
  let oldData = JSON.parse(fs.readFileSync(fileName));
  fs.writeFileSync(fileName, JSON.stringify([...oldData, ...users]));
};

CreatNewUser("Stefan", "password123", 3, false, "06.03.2023");
//
//
//
const OldUsersInactive = () => {
  let oldData = JSON.parse(fs.readFileSync(fileName));

  oldData.forEach((user) => {
    if (user.dateCreated !== "06.03.2023") user.isActive = false;
  });

  fs.writeFileSync(fileName, JSON.stringify(oldData));
};

OldUsersInactive();
//
//
//
const DeleteUser = (userName) => {
  let oldData = JSON.parse(fs.readFileSync(fileName));

  let newData = oldData.filter((user) => user.username !== userName);

  fs.writeFileSync(fileName, JSON.stringify(newData));
};

DeleteUser("Dejvid");
//
//
//
const DeleteInactiveUsers = () => {
  let oldData = JSON.parse(fs.readFileSync(fileName));

  let newData = oldData.filter((user) => user.isActive !== false);

  fs.writeFileSync(fileName, JSON.stringify(newData));
};

DeleteInactiveUsers();
