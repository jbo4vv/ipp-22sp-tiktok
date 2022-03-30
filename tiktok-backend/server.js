import express from 'express';
import mongoose from 'mongoose';

//app config
const app = express();
const port = 9000;

//middlewares

//DB config

//api endpoints
app.get("/", (req,res) => res.status(200).send('Hello World'));

//listener
app.listen(port, () => console.log(`listening on localhost: ${port}`))

