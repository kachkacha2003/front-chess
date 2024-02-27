import React, { Fragment, useEffect, useReducer } from "react";
import Routes from "./components";
import { LayoutContext, layoutState, layoutReducer } from "./components/shop";

const options = {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    apikey: 'pIioEhmY2IwY80F2xzhAL94Uee6il0r7',
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: new URLSearchParams({
      'client_Id': '7001701',
      'client_secret': 'lVS8MxIegqM8vWiA'
      
  })
}
// const options = {
//   method: 'POST',
//   headers: {
//     accept:"application/json",
//     apikey: 'pIioEhmY2IwY80F2xzhAL94Uee6il0r7',
//     'Content-Type': 'application/x-www-form-urlencoded'
//   },
//   body: new URLSearchParams({
//     'client_Id': '7001701',
//     'client_secret': 'IVS8MxIegqM8vWiA'
// })
 
// };



function App() {
  const [data, dispatch] = useReducer(layoutReducer, layoutState);
  console.log(data)
  // useEffect(()=>{
  //   fetch('https://api.tbcbank.ge/v1/tpay/access-token', options)
  //   .then(response => response.json())
  //   .then(response => console.log(response))
   
  // },[])
  
  
 
  return (
    <Fragment>
      <LayoutContext.Provider value={{ data, dispatch }}>
        <Routes />
      </LayoutContext.Provider>
    </Fragment>
  );
}

export default App;
