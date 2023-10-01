require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const bp = require("body-parser");

const routes = require("./student_routes");

app.use(cors());
app.use(express.json());
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

app.use(routes);

app.listen(process.env.PORT, () => {
  console.log("Server up and running on port: ", process.env.PORT);
});
