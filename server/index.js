const express = require("express");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 5001;

app.listen(5000, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
