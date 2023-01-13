const mongoose = require("mongoose");
DatabaseConnection();
async function DatabaseConnection() {
  try {
    await mongoose.connect(
      "mongodb+srv://YourMongoDbUserName:YourMongoDBPassword@cluster0.vtfst.mongodb.net/JobHunt",
      { useNewUrlParser: true }
    );
    console.log("Mongo Db connection sucessful");
  } catch (error) {
    console.log("Connection failed");
  }
}
module.exports = mongoose;
