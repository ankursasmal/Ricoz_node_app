require('dotenv').config();
let express=require('express');
let app=express();
const route=require('./route/allRoute')
const PORT=process.env.PORT || 3000;
let cors=require('cors');
let connectionDB=require('./db/connection')
let cookie=require('cookie-parser');
app.use(cookie());
app.use(cors({
    origin: 'http://localhost:3001',  
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    allowedHeaders: ['Content-Type', 'Authorization'], 
   credentials: true, 
   }))
 
   app.use(express.json());
app.use(route);

connectionDB().then(()=>{ 
    app.listen(PORT,()=>{
        console.log(`server listen ${PORT}`)
    })
    }).catch((e)=>{
        console.log('server not start',e.message)
    })