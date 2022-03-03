const express=require("express");
const path=require ("path");
const app=express();
app.use(express.static(path.join(__dirname, 'public')));

app.get('/',(req, res)=>{
    res.sendFile(path.join(__dirname+"/index.html"))
});
app.get('/order',(req, res)=>{
    res.sendFile(path.join(__dirname+"/first.html"))
});
app.get('/front',(req, res)=>{
    res.sendFile(path.join(__dirname+"/two.html"))
});

app.get('/shopping',(req, res)=>{
    res.send("Welcome to shopping");
});
app.listen(3000,(req,res)=>{
    console.log("Server is running on port 3000");
});
