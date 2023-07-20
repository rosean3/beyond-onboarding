const express = require("express");
const routes = require("./routes");

require("./database"); // initializing the connection and the models

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.log("listening on port 3333");
});
