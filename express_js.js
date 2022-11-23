const express = require("express");
const app = express();

app.use(express.static(__dirname + "/public"));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/", async (req, res) => {
  var jsondata = await req.body;
  console.log(jsondata);
  res.send("Successfully uploaded");
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Everything is ok
listening at the port 3000`);
});
