const express = require('express')
require('dotenv').config()
const cors = require('cors')
const app = express()
const connectDB = require('./Config/db')
const Shopify = require('shopify-api-node');


app.use(cors())




const shopify = new Shopify({
  shopName: process.env.SHOPIFY_STORE,
  accessToken: process.env.SHOPIFY_ACCESS_TOKEN,
  apiVersion: '2023-01' // You can specify the API version if needed
});

async function getOrders() {
    try {
      const orders = await shopify.order.list();
      console.log(orders);
    } catch (error) {
      console.error('Error fetching orders:', error.response ? error.response.body : error.message);
    }
  }
  
  getOrders();





connectDB().then(()=>{
    app.listen(7000,()=>{console.log("port listening")})
}).catch((err)=>{console.log(err,"error")})
