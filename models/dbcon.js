const mongoose = require("mongoose");

const url = `mongodb+srv://harshsaid31:${'harshsaid31'}@cluster0.zpx0udp.mongodb.net/?retryWrites=true&w=majority`

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection successfull");
  })
  .catch((err) => console.log("db not connected"));