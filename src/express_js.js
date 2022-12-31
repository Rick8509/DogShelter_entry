const express = require("express");
const app = express();

app.use(express.static(__dirname + "../public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "../public/index.html");
});

app.listen(process.env.PORT || 9000, () => {
  console.log("server listening at the port 9000");
});
