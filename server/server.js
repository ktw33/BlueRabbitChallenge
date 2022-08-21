const express = require("express");
const path = require("path");
const cors = require("cors");

const controller = require("./controllers/nameController");

const app = express();
const PORT = 3000;

app.use(cors()); 
app.use(express.json());
//app.use(express.urlencoded({ extended: true }));

// app.use("/", express.static(path.join(__dirname, "../assets")));

app.get("/addNames", controller.getNames, (req, res) => {
  return res.status(200).json(res.locals.names)
  //return res.status(200)
});

app.post("/getNames", controller.addName, (req, res) => {
  return res.status(201).json(res.locals.names);
});

// app.get("/", (req, res) => {
//   return res.sendFile(path.resolve(__dirname, "../views/index.html"));
// });

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
