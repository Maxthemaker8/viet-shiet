const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/userRoute");
const authRoute = require("./routes/authRoute");
const productRoute = require("./routes/productRoute");
const cartRoute = require("./routes/cartRoute");
const orderRoute = require("./routes/orderRoute");
const stripeRoute = require("./routes/stripeRoute");
const cors = require("cors");


//initialize
const app = express();
app.use(express.json());
dotenv.config();
mongoose.connect(process.env.MONGODB_URL)
   .then(()=> {console.log('db connection succesful')})
   .catch((err)=> {console.log(err)});

app.use(cors());   
app.listen(process.env.PORT || 5000, ()=> {console.log('backend server is running')});

//declare routes
   app.use("/api/auth", authRoute);
   app.use("/api/users", userRoute);
   app.use("/api/products", productRoute);
   app.use("/api/carts", cartRoute);
   app.use("/api/orders", orderRoute);
   app.use("/api/checkout", stripeRoute);
   