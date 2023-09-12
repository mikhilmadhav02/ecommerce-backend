const express = require('express')

const usercontroller = require('../controller/dbcontroller')
const wishcontroller = require('../controller/wishlistcontroller')
const cartcontroller = require('../controller/cartcontroller')
const router = new express.Router()


// allproducts
router.get('/allproducts',usercontroller.getproducts)
// viewproduct
router.get('/view/:id',usercontroller.viewproduct)

// wishlist add
router.post('/wishlist',wishcontroller.wishlistadd)
// wishallproducts
router.get('/wishdetails',wishcontroller.wishallproducts)
// wishdelete
router.delete('/wishdelete/:id',wishcontroller.wishdelete)
//cart add
router.post('/cartsadd',cartcontroller.cartsadd)
// all carts products
router.get('/getcarts',cartcontroller.getcarts)

// cartdelete
router.delete('/cartdelete/:id',cartcontroller.cartdelete)
// emptycart
router.delete('/emptycart',cartcontroller.emptycart)

// quantity plus
router.get('/plus/:id',cartcontroller.plus)
// quantity minus
router.get('/minus/:id',cartcontroller.minus)

module.exports = router