const products = require('../model/dbmodel')

exports.getproducts= async(req,res)=>{

try{
    const details = await products.find()
console.log(details);
res.status(200).json(details)

}catch(error){
res.status(403).json(`error, while fetching data from database ${error}` )
}
}

// view logic
exports.viewproduct=async (req,res)=>{
    
    const {id}=req.params
    console.log(id);
   try{
    const preuser = await products.findOne({id})
    console.log(preuser);
     res.status(200).json(preuser)


   }catch(error){
    res.status(400).json(error)
   }

}

