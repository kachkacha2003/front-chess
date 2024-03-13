import React, { Fragment, useContext, useEffect, useState } from "react";
import Layout, { LayoutContext } from "../layout";
import { createOrder } from "./FetchApi";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import OrderSuccessMessage from "../home/OrderSuccessMessage";
const apiURL = process.env.REACT_APP_API_URL;

const Success = ({state,setState}) => {
      const { data, dispatch } = useContext(LayoutContext);
      
   let history=useHistory();

  let info=localStorage.getItem("payId");
   useEffect(()=>{
    if(!info){
        history.push("/")
    }
   
    const paymentComplain = async () => {

      const options = {
        params: { info },
        method: 'GET',
        headers: {
    
          Accept: '/',
          'Content-Type': 'application/json',
    
    
        },
    
      }
      try {
   
      
        let res = await axios.get(`${apiURL}payment/completion`, options);
     
      if(res.data.data.status=="Succeeded"){
            let orderData = {
    allProduct: JSON.parse(localStorage.getItem("cart")),
    user: JSON.parse(localStorage.getItem("jwt")).user._id,
    amount: res.data.data.confirmedAmount,
    transactionId: res.data.data.payId,
    address: localStorage.getItem("adress"),
    phone: localStorage.getItem("number")
  };
  
  try {
    let resposeData = await createOrder(orderData);
   localStorage.setItem("item",false)
    if (resposeData.success) {
      localStorage.setItem("cart", JSON.stringify([]));
      localStorage.removeItem("payId")
      localStorage.removeItem("number");
      localStorage.removeItem("address");
      history.push("/")
    } else if (resposeData.error) {
     
    }
  } catch (error) {
   
  }
      }else{
        history.push("/")
      }
      } catch (error) {
       
      }
    };
    paymentComplain();
   
   
    
 
   },[])
   return(
    <>
    
    
    <OrderSuccessMessage/>
    </>
   )
 
};
const Succes = () => {
  return <Layout children={<Success />} />;
};
export default Succes;
