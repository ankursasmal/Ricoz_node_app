 
 let topicModel=require('../model/user');
 let connectionDB=require('../db/connection');
 connectionDB();

 async function getApi(req,res) {
    try {
         let data=await topicModel.find();
// console.log(data)
        res.json({message:"dta come succesfully",
             success:true,
             data:data,
            error:false})
    }
    catch(e){
        res.status(400).json({
            message:"data not come succesfully",
            success:false,
           error:true,
        data:null
    })
    }   
}


async function getEditData( req,res) {
    try {
        let Id=req.params.id;
        console.log(Id)

        let data = await topicModel.findById(Id);
        console.log('akk')
        res.status(200).json({message:"dta come succesfully",
             success:true,
             data:data,
            error:false
        })
    }
    catch(e){
        res.status(400).json({message:"data not come succesfully",
            success:false,
           error:true,
        data:null
    })
    }   
}
async function DeleteApi(req, res) {
    try {
        let Id = req.params.id;
        // console.log(Id);
        
         let data = await topicModel.findByIdAndDelete(Id);

        if (data) {
            res.status(201).json({
                message: "Data deleted successfully",
                success: true,
                data: data,
                error: false
            });
        } else {
            res.status(404).json({
                message: "Data not found",
                success: false,
                data: null,
                error: true
            });
        }
    } catch (e) {
        res.status(500).json({
            message: "Error deleting data",
            success: false,
            error: true,
            data: null
        });
    }
}

async function PutApi(req, res) {
    try {
        let payload = req.body; 
        console.log(payload)
        let Id=req.params.id;
        console.log(Id)
        let data = await topicModel.findByIdAndUpdate(Id, payload, { new: true }); 
         if (data) {
            res.status(201).json({
                message: "Data updated successfully",
                success: true,
                data: data,
                error: false
            });
        } else {
            res.status(404).json({
                message: "Data not found",
                success: false,
                data: null,
                error: true
            });
        }
    } catch (e) {
        res.status(500).json({
            message: "Error updating data",
            success: false,
            error: true,
            data: null
        });
    }
}


    async function PostApi( req,res) {
    try {
        let payload = req.body;   
        // console.log(payload);   

        let user = new topicModel(payload);   
        let data = await user.save(); 

        res.status(201).json({message:"data regester succesfully",
             success:true,
             data:data,
            error:false})
    }
    catch(e){
        res.status(401).json({message:"data not regester succesfully",
            success:false,
           error:true,
        data:null
    })
    }   
}
 
async function searchApi  (req, res)  {
  try {
    let search = req.params.search;
 
     let regex = new RegExp(search, 'i');

     const data = await topicModel.find({ topic: regex });

     return res.status(200).json({
      message: "Search successful",
      error: false,
      data: data,
      success: true,
      status: 200
    });
  } catch (e) {
     return res.status(400).json({
      message: "Search failed",
      error: true,
      success: false,
      status: 400
    });
  }
};


 module.exports={PostApi,PutApi,DeleteApi,getApi,searchApi,getEditData}