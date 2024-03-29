const mongoose = require("mongoose");
const newbase = require("./keys").mongoURI;

const base = async () => {
  try {
    await mongoose.connect(newbase, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("User_Base activated...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = base;
