import { createOrder } from "./FetchApi";

export const fetchData = async (cartListProduct, dispatch) => {
  dispatch({ type: "loading", payload: true });
  try {
    let responseData = await cartListProduct();
    if (responseData && responseData.Products) {
      setTimeout(function () {
        dispatch({ type: "cartProduct", payload: responseData.Products });
        dispatch({ type: "loading", payload: false });
      }, 1000);
    }
  } catch (error) {
    
  }
};



export const pay = async (
  data,
  dispatch,
  state,
  setState,
  getPaymentProcess,
  totalCost,
  history
) => {
  if (!state.address) {
    setState({ ...state, error: "Please provide your address" });
  } else if (!state.phone) {
    setState({ ...state, error: "Please provide your phone number" });
  } else {
    let cost=totalCost();
    
   
     localStorage.setItem("adress",state.address);
     localStorage.setItem("number",state.phone);

        dispatch({ type: "loading", payload: true });
       
        
        getPaymentProcess(cost)
          .then(async (res) => {
            localStorage.setItem("payId",res.payId);
            if (res) {
             
              window.location.href = res.links[1].uri;
              
            }
          })
         
    
      .catch((error) => {
      
        setState({ ...state, error: error.message });
      });
  }
};
