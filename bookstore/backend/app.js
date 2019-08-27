const express=require('express');
const connection=require('./config/database');
const app=express();

connection();

const port= process.env.PORT || 8082;

const siteUrl=new URL(`http://localhost:${port}`)

app.get('/',(req,res)=>res.send("Hello World"));

app.listen(port,()=>console.log(`Server Running on ${siteUrl}`));
