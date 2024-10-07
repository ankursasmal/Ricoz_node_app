let express=require("express");
let route=express.Router();
let topicModel=require('../model/user');
let connectionDB=require('../db/connection');
connectionDB();

const controlers=require('../controllers/index.js');

route.get('/', controlers.getApi);
route.post('/register',controlers.PostApi);
route.delete('/detete-date/:id', controlers.DeleteApi);
route.put('/updata-data/:id', controlers.PutApi);
route.get('/search-data/:search', controlers.searchApi);
route.get('/getEditId/:id', controlers.getEditData);
 
module.exports=route;