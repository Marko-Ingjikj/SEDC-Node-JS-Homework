// Create an event that will greet all students when they register to our app!

const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

const emitter = new MyEmitter();

emitter.on("register", (studentsName) => {
  console.log(`Thank you for registering ${studentsName}`);
});

const registerNewStudent = (fullName) => {
  emitter.emit("register", fullName);
};

registerNewStudent("Marko Ingjikj");
