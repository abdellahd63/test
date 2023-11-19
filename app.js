const express=require('express');
const app=express();
const mongoose= require('mongoose')


const dbURI='mongodb+srv://karim00:test1234@karim.9cq8aes.mongodb.net/karimdatabase';
//const dbURI='mongodb+srv://usernameDBtest:CdSteeJMJpg4qOuW@cluster0.hibcrcx.mongodb.net/Karim'

mongoose.connect(dbURI)
.then((result)=> console.log('db connected'))
.catch((err) => {
    console.error('Error connecting to the database:', err.message);
  });
app.set('view engine','ejs');
app.listen(3000);
