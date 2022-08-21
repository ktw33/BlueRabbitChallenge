const express = require("express");
const path = require("path");
const cors = require("cors");

const controller = require("./controllers/nameController");

const app = express();
const PORT = 3000;

app.use(cors()); 
app.use(express.json());

app.get("/getNames", controller.getNames, (req, res) => {
  return res.status(200).json(res.locals.names)
});

app.post("/addNames", controller.addName, (req, res) => {
  return res.status(201).json(res.locals.names);
});

app.use((err, request, response, next) => {
  const defaultErr = {
    message: "Error occurred in express middleware.",
    status: 500,
    log: "Internal Server Error",
  };
  const error = Object.assign(defaultErr, err);
  return response.status(error.status).send(error.message);
});

app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`));
module.exports = app;
