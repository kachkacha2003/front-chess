import React, { Fragment, useEffect, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { LayoutContext } from "../layout";
import { subTotal, quantity, totalCost } from "../partials/Mixins";

import { cartListProduct } from "../partials/FetchApi";
import {  getPaymentProcess } from "./FetchApi";
import { fetchData, pay } from "./Action";



export const CheckoutComponent = ({state,setState}) => {
  const history = useHistory();
  const { data, dispatch } = useContext(LayoutContext);

 

  useEffect(() => {
    fetchData(cartListProduct, dispatch);
    localStorage.removeItem("payId")
      localStorage.removeItem("number");
      localStorage.removeItem("address");


  }, []);

  if (data.loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <svg
          className="w-12 h-12 animate-spin text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          ></path>
        </svg>
        გთხოვთ დაელოდოთ დასრულებას
      </div>
    );
  }
  return (
    <Fragment>
      <section className="mx-4 mt-20 lg:mx-12 lg:mt-32 ">
        <div className="text-2xl mx-2">შეკვეთა</div>
        <div className="lg:ml-6 font-semibold text-gray-600 text-sm mt-[20px]">
                    მიტანის სერვისის ღირებულება : 5₾
                  </div>
        {/* Product List */}
        <div className="flex flex-col lg:flex lg:space-x-2 lg:flex-row">
          <div className="lg:w-1/2">
            <CheckoutProducts products={data.cartProduct} />
          </div>
          <div className="w-full order-first lg:order-last lg:w-1/2">
          
              <Fragment>
                <div
                  onBlur={(e) => setState({ ...state, error: false })}
                  className="p-4 lg:p-8"
                >
                  {state.error ? (
                    <div className="bg-red-200 py-2 px-4 rounded">
                      {state.error}
                    </div>
                  ) : (
                    ""
                  )}
                  <div className="flex flex-col py-2">
                    <label htmlFor="address" className="pb-2">
                     მიწოდების მისამართი
                    </label>
                    <input
                      value={state.address}
                      onChange={(e) =>
                        setState({
                          ...state,
                          address: e.target.value,
                          error: false,
                        })
                      }
                      type="text"
                      id="address"
                      className="border px-4 py-2"
                      placeholder="Address..."
                    />
                  </div>
                  <div className="flex flex-col py-2 mb-2">
                    <label htmlFor="phone" className="pb-2">
                      ტელეფონის ნომერი
                    </label>
                    <input
                      value={state.phone}
                      onChange={(e) =>
                        setState({
                          ...state,
                          phone: e.target.value,
                          error: false,
                        })
                      }
                      type="number"
                      id="phone"
                      className="border px-4 py-2"
                      placeholder="შეიყვანეთ ნომერი.."
                    />
                  </div>
                  
                  <div
                    onClick={(e) =>
                      pay(
                        data,
                        dispatch,
                        state,
                        setState,
                        getPaymentProcess,
                        totalCost,
                        history
                      )
                    }
                    className="w-full px-4 py-2 text-center text-white font-semibold cursor-pointer"
                    style={{ background: "#303031" }}
                  >
                   გადახდა
                  </div>
                </div>
              </Fragment>
            
          </div>
        </div>
        
      </section>
    </Fragment>
  );
};

const CheckoutProducts = ({ products }) => {
  const history = useHistory();

  return (
    <Fragment>
      <div className="grid grid-cols-2 lg:grid-cols-1">
        {products !== null && products.length > 0 ? (
          products.map((product, index) => {
            return (
              <div
                key={index}
                className="lg:flex lg:flex-col col-span-1 m-2 lg:py-6 lg:border-t lg:border-b lg:my-2 lg:mx-0 lg:flex lg:items-center lg:justify-between"
              >
                
                <div className="lg:flex  lg:items-center lg:space-x-4">
                  <img
                    onClick={(e) => history.push(`/products/${product._id}`)}
                    className="cursor-pointer aspect-[13/10]  sm:aspect-[15/10] lg:aspect-[1/1] lg:h-20 lg:w-20 object-cover object-center"
                    src={product.pImages[0]}
                    alt="wishListproduct"
                  />
                  <div className="text-lg lg:ml-6 truncate">
                    {product.pName}
                  </div>
                  <div className="lg:ml-6 font-semibold text-gray-600 text-sm">
                    ფასი : {product.pPrice}₾
                  </div>
                  <div className="lg:ml-6 font-semibold text-gray-600 text-sm">
                    რაოდენობა : {quantity(product._id)}
                  </div>
                 
                  <div className="font-semibold text-gray-600 text-sm">
                    ჯამში : {product.pPrice*quantity(product._id)}₾
                  </div>
                </div>
               
              </div>
              
            );
          })
        ) : (
          <div>შეკვეთისთვის პროდუქტი ვერ მოიძებნა</div>
        )}
      </div>
    </Fragment>
  );
};

export default CheckoutProducts;
