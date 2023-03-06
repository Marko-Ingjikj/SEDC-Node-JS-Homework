class User {
  constructor(username, password, age, isActive, dateCreated) {
    (this.username = username), (this.password = password);
    this.age = age;
    this.isActive = isActive;
    this.dateCreated = dateCreated;
  }
}

module.exports = {
  User,
};
