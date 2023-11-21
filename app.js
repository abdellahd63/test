const express=require('express');
const app=express();
const mongoose= require('mongoose')
//    K39tFYMHJe4F6C96
const dbURI='mongodb+srv://testmongodbk:K39tFYMHJe4F6C96@cluster0.mz1sz0g.mongodb.net/Sonelgaz';
//const dbURI='mongodb+srv://usernameDBtest:CdSteeJMJpg4qOuW@cluster0.hibcrcx.mongodb.net/Karim'

mongoose.connect(dbURI)
.then((result)=> console.log('db connected'))
.catch((err) => {
    console.error('Error connecting to the database:', err.message);
  });
app.set('view engine','ejs');
app.listen(3000);
