require('dotenv').config()
const express = require('express')
const cors = require('cors')
require('./connection/dbconnection')
const router = require('./router/dbrouter')

const server = express()
server.use(cors())
server.use(express.json())
server.use(router)
 

const PORT = 3000 || process.env.PORT

 

server.listen(PORT,()=>{
console.log(`cart server started at : ${PORT}`);
})

server.get('/',(req,res)=>{
   res.status(200).json("cart server started working")
})