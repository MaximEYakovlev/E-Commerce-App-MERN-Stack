require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());

app.use("/auth", authRoute);
app.use("/users", userRoute);
app.use("/products", productRoute);
app.use("/cart", cartRoute);

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
