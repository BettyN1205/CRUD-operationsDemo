const express = require("express");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 5050;

const userRoutes = require("./routes/user-routes");

app.use(express.json());

app.use("/users", userRoutes);

app.listen(PORT, () => {
  console.log(`running at http://localhost:${PORT}`);
});
