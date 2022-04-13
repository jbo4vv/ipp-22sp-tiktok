import express from 'express';
import mongoose from 'mongoose';
import Data from './data.js';
import Videos from './dbModel.js';


// app config
const app = express();
const port = 9000;

// middlewares
app.use(express.json());
app.use((req,res,next) => {
   res.setHeaders('Access-Control-Allow-Origin', '*'),
   res.setHeaders('Access-Control-Allow-Headers', '*'),
   next()
})


// DB Config
const connection_url = 'mongodb+srv://admin:4wsjV9Cg72vnPiro@cluster0.avxqy.mongodb.net/tiktok?retryWrites=true&w=majority';
mongoose.connect(connection_url, {
   useNewUrlParser: true,
   // userCreateIndex: true,
   useUnifiedTopology: true,
});
//api endpoints
app.get('/', (req,res) => res.status(200).send('Hello World'));

app.get('/v1/posts', (req,res) => res.status(200).send(Data));

app.post('/v2/posts', (req,res) => {
   Videos.find( (err, data) => {
      if (err) {
         res.status(500).send(err);
      } else {
         res.status(201).send(data);
      }
   });
})

app.listen(port, () => console.log(`listening on localhost: ${port}`));