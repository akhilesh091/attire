const mongoose = require("mongoose");
// mongoose.connect("mongodb://127.0.0.1:27017/attireCloting");
mongoose.connect("mongodb+srv://akhilesh:Evergreen@cluster0.y3zibe2.mongodb.net/attireClothing");

const nocache = require("nocache");

const express = require("express");
const app = express();

app.use(express.static('public'));
app.use(express.json())
app.use(nocache())
app.use(express.urlencoded({ extended: true }));
const userRoute = require("./routes/userRoute");
app.use("/", userRoute);

const passwordRoute = require('./routes/passwordRoute')
app.use("/password",passwordRoute)

const adminRoute = require("./routes/adminRoute");

app.use("/admin", adminRoute);

app.get('*',function(req,res){
  res.status(404).render('404.ejs')
})


app.listen(3000, function () {
  console.log("server is running at 3000");
});
