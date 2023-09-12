const carts = require('../model/cartmodel')

exports.cartsadd =async (req,res)=>{
    const{id,title,price,image}=req.body
       const product = await carts.findOne({id})
if(product){
    product.quantity+=1
    product.total=product.price*product.quantity
await product.save()
res.status(200).json("product incremented succesfully")
}else{
    const newproduct = new carts({
        id,title,price,image,quantity:1,total:price
    })
    await newproduct.save()
    res.status(200).json("product added succesfully")
}




}


// gett all products in cart
exports.getcarts=async (req,res)=>{

const user = await carts.find()
if(user){
    res.status(200).json(user)
}else{
    res.status(400).json("cart empty")
}
}

// cartdelete
exports.cartdelete=async (req,res)=>{
    const id = req.params.id
await carts.deleteOne({id})
res.status(200).json("product deleted")
}

// emptycart
exports.emptycart=async (req,res)=>{
await carts.deleteMany()
res.status(200).json("all cart products deleted")
}

// quantity plus
exports.plus=async (req,res)=>{
const{id}=req.params

const user = await carts.findOne({id})
if(user){
    user.quantity+=1
    user.total = user.quantity*user.price
    await user.save()
    const preuser = await carts.find()
    res.status(200).json(preuser)
}
}

// quantity minus
exports.minus=async (req,res)=>{
    const{id}=req.params


     
    const user = await carts.findOne({id})
    if(user){
        
        user.quantity-=1
      if(user.quantity==0){
await carts.deleteOne({id})
const preuser = await carts.find()
res.status(200).json(preuser)
      }else{
        user.total = user.quantity*user.price
        await user.save()
        const preuser = await carts.find()
        res.status(200).json(preuser)
      }
    }
    }