const express=require('express');
const connection=require('./config/database');

var cors=require('cors');

const books=require('./routes/api/books');

const app=express();

connection();

app.use(cors({ origin:true, credentials:true }));

app.use(express.json({extended:false}));



const port= process.env.PORT || 8082;

const siteUrl=new URL(`http://localhost:${port}`)

app.get('/',(req,res)=>res.send("Hello World"));

app.use('/api/books',books);

app.listen(port,()=>console.log(`Server Running on ${siteUrl}`));
