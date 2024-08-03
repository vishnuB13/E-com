const Shopify = require('shopify-api-node');


const shopify = new Shopify({
    shopName: process.env.SHOPIFY_STORE,
    accessToken: process.env.SHOPIFY_ACCESS_TOKEN,
    apiVersion: '2023-01' // You can specify the API version if needed
  });
  
  async function getOrders(req,res) {
      try {
        const orders = await shopify.order.list();
        return orders
      } catch (error) {
        console.error('Error fetching orders:', error.response ? error.response.body : error.message);
      }
    }
    
  getOrders()

    module.exports=getOrders()