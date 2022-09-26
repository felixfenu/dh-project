const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname,"/public")));
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/home.html"))
})
app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname,"/views/home.html"))
});
app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname,"/views/register.html"))
});
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname,"/views/login.html"))
});
app.listen(process.env.PORT || 3000, function() {
    console.log("Servidor corriendo");
})