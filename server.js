const express = require("express");
const app = express();
const cors = require("cors");

// db
require("./models/dbcon");

const userRoutes = require("./routes/userRoutes");

app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000", "http://localhost:3001"],
  })
);

app.get("/", (req, res) => {
  return res.status(200).json({ msg: "hello world" });
});

app.use("/api/v1", userRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`listening at port ${PORT}`));