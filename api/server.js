const express = require("express");
const db = require("./config/db");
const cookieParser = require("cookie-parser");
const routes = require("./routes/index");
const models = require("./models/index");

const app = express();

app.use(cookieParser());
app.use(express.json());

app.use("/api", routes);

db.sync({ force: false })
  .then(function () {
    app.listen(3000, () =>
      console.log("Servidor escuchando en el puerto 3000")
    );
  })
  .catch(console.error);
