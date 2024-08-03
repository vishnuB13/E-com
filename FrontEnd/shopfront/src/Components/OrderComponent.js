import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'

const OrderComponent = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState('');
  
    useEffect(() => {
      axios.get('http://localhost:7000/order')
        .then(response => {
            console.log(response,"from frontend")
          setData(response.data);
        })
        .catch(error => {
          setError(error.message);
        });
    }, []);
  return (
    <div>
        ORDERS HERE
        {data}
    </div>
  )
}

export default OrderComponent