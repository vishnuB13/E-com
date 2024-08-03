const express = require('express')
require('dotenv').config()
const cors = require('cors')
const app = express()
const connectDB = require('./Config/db')
const routes = require('./routes')


app.use(cors())
app.use('/',routes)


connectDB().then(()=>{
  app.listen(process.env.PORT,()=>{console.log("port listening")})
}).catch((err)=>{console.log(err,"error")})





