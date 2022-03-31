import express from 'express';
import mongoose from 'mongoose';



//app config
const app = express();
const port = 9000;

//middlewares

//DB config
const connection_url='mongodb+srv://admin:MN1y7ADGomSXJYTF@cluster0.54rpi.mongodb.net/tiktok?retryWrites=true&w=majority';

mongoose.connect(connection_url,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});


//api endpoints
app.get("/", (req,res) => res.status(200).send('Hello World'));

//listener
app.listen(port, () => console.log(`listening on localhost: ${port}`))

