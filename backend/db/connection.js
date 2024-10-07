let mongoose=require('mongoose')

// connect with driver
async function connectionDB (){
   
    // MONGO_DRIVE_DB='mongodb+srv://ankursasmal2024:Ankur123@cluster0.aaz4lyj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
 
    try{
mongoose.connect(process.env.MONGO_URI||'mongodb+srv://ankursasmal2024:Ankur123@cluster0.aaz4lyj.mongodb.net/topic?retryWrites=true&w=majority&appName=Cluster0');
     console.log('db connect');
}
catch(e){
    console.log('db Not connect',e.message)
} 
}

module.exports=connectionDB