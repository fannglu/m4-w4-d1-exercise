const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/test", {
  useNewUrlParser: true, //to ensure the URL bering verify correctly 
  useUnifiedTopology: true, //this is for data 
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  // we're connected!
  const kittySchema = new mongoose.Schema({
    name: String
  });
  kittySchema.methods.speak = function () {
    const greeting = this.name
      ? "Meow name is " + this.name
      : "I dont have a name";
    console.log(greeting);
  };

  const Kitten = mongoose.model("Kitten", kittySchema);
  // Create data/object
  const fluf = new Kitten({ name: "fluffy" });
  fluf.speak()
});
