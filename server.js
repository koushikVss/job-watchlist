const express = require("express");
const logger = require ('morgan');
const mongoose = require ('mongoose');
const bodyParser = require ('body-parser')
const routes= require('./routes/watchroutes')
const app = express();
const cors = require("cors")
const DB_URI='mongodb+srv://watchlistdb:watchlist@watchlistdb.dl0lpmm.mongodb.net/?retryWrites=true&w=majority' ;
// const DB_URI='mongodb://localhost:27017/Watchlist' ;
// const DB_URI = process.env.MONGODB_SERVER;

mongoose.connect(DB_URI);
mongoose.connection.once('open',(err)=>{
    if(!err)
    {
        console.log('connection suscessful');
    }
});

// app.use(cors())
app.use(
    cors({
        // origin: process.env.FRONT,//"http://localhost:3000",
        origin: "https://huntjob.netlify.app/",
        methods: "GET,POST,PUT,DELETE",
        credentials: true,
    })
)
app.use(bodyParser.json());

app.use('/api/v1', routes);



const port= process.env.PORT || 8001;
app.listen(port, () => {
    console.log(`server running on port ${port}`)
})