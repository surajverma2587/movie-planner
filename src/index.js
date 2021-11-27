const express = require("express");
const path = require("path");

const routes = require("./routes");

const PORT = 4000;

const app = express();

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../public")));
app.use(routes);

app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
