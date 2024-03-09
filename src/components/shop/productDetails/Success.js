import React, { Fragment, useContext, useEffect } from "react";
import Layout, { LayoutContext } from "../layout";
import { createOrder } from "../order/FetchApi";


const Success = (props) => {
  const { data, dispatch,state } = useContext(LayoutContext);
   useEffect(()=>{

    console.log(state)

async function something(){
  // let orderData = {
  //   allProduct: JSON.parse(localStorage.getItem("cart")),
  //   user: JSON.parse(localStorage.getItem("jwt")).user._id,
  //   amount: cost,
  //   transactionId: 1,
  //   address: state.address,
  //   phone: state.phone,
  // };
  // try {
  //   let resposeData = await createOrder(orderData);
  //   if (resposeData.success) {
  //     localStorage.setItem("cart", JSON.stringify([]));
  //     dispatch({ type: "cartProduct", payload: null });
  //     dispatch({ type: "cartTotalCost", payload: null });
  //     dispatch({ type: "orderSuccess", payload: true });
  //     setState({ clientToken: "", instance: {} });
  //     dispatch({ type: "loading", payload: false });
  //     return history.push("/");
  //   } else if (resposeData.error) {
  //     console.log(resposeData.error);
  //   }
  // } catch (error) {
  //   console.log(error);
  // }
}
   
   },[])
  return (
    <Fragment>
      <Layout   />
    </Fragment>
  );
};

export default Success;
