import express from  'express';
export const app = express();
import cors from 'cors';


    // import your route default here
// import  yournameforroute from './routes/yourRouteFile.js'    // example 

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb',extended:true}));
app.use(cors());

//use your imported route here
// app.use('/yourPrefix', yournameforroute); example


//just for backend testing
app.get('/', (req,res)=>{
    res.send("hello from backend");
})


