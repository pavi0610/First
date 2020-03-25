var express = require("express");
var app = express();
var port = process.env.PORT || 3000;


app.get("/url", (req, res) => {
  
  res.send("Hello.......:-)");
   });
app.listen(3000,() =>{
    console.log("server is running on port 3000");
})