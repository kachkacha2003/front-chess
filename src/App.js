import React, { Fragment, useEffect, useReducer, useState } from "react";
import Routes from "./components";
import { LayoutContext, layoutState, layoutReducer } from "./components/shop";





function App() {
  const [data, dispatch] = useReducer(layoutReducer, layoutState);
  const [state, setState] = useState({
    address: "",
    phone: "",
    error: false,
    success: false,
    clientToken: null,
    instance: {},
  });


  
  
 
  return (
    <Fragment>
      <LayoutContext.Provider value={{ data, dispatch }}>
        <Routes state={state} setState={setState}/>
      </LayoutContext.Provider>
    </Fragment>
  );
}

export default App;
