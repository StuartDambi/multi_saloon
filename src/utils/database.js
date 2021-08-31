const mongoose = require("mongoose");

const connectToDB = async (databaseUrl) => {
  mongoose.connect(databaseUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('connected successfully'))
  .catch((err) => console.log(err));
};

module.exports = connectToDB;
