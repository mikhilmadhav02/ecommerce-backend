const wishlists = require('../model/wishlistmodel')


exports.wishlistadd=async (req,res)=>{
const{id,title,price,image}=req.body

try{

    const userid = await wishlists.findOne({id})
if(userid){
    res.status(400).json("product already exists in your wishlists")
}else{
    const newuser = new wishlists({
    id,
    title,
    price,
    image
    })
    await newuser.save()
    res.status(200).json(newuser)
}

}catch(error){
    res.status(400).json("error in try part of server")
}

}

// all wishlist products

exports.wishallproducts=async (req,res)=>{
    const user = await wishlists.find()
    if(user){
        res.status(200).json(user)
    }else{
        res.status(400).json("wishlist empty")
    }
}

// wishdelete

exports.wishdelete= async (req,res)=>{
    const id=req.params.id
    await wishlists.deleteOne({id})
    const user = await wishlists.find()
    res.status(200).json(user)

}