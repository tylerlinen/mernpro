const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://tlinen:fishpillow1@cluster0.fzilw.mongodb.net/notesDb?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

app.use("/", require("./routes/noteRoute"));

app.get("/", function (req, res) {
  res.send("Express here!");
});

app.listen(3001, function () {
  console.log("express server is running on port 3001");
});
