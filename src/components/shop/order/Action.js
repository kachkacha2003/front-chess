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
    console.log(error);
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
    console.log(cost)
      
        dispatch({ type: "loading", payload: true });
       
        
        getPaymentProcess(cost)
          .then(async (res) => {
            if (res) {
              console.log(res)
              window.location.href = res[1].uri;
              
            }
          })
         
    
      .catch((error) => {
        console.log(error);
        setState({ ...state, error: error.message });
      });
  }
};
