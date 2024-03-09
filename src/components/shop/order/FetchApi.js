import axios from "axios";
const apiURL = process.env.REACT_APP_API_URL;
const keyAPI = process.env.REACT_APP_API_KEY;
const clientID = process.env.REACT_APP_CLIENT_ID;
const clientSECRET = process.env.REACT_APP_CLIENT_SECRET;


export const getPayment = async (totalCost) => {

  const options = {
    params: { totalCost },
    method: 'GET',
    headers: {

      Accept: '/',
      'Content-Type': 'application/json',


    },

  }
  try {

    // let res = await axios.post(`https://api.tbcbank.ge/v1/tpay/access-token`,options);
    let res = await axios.get(`https://fluoridated-checker-spade.glitch.me/payment`, options);
  
    return res.data.data.links;
  } catch (error) {
    console.log(error);
  }
};


export const getPaymentProcess = async (totalCost) => {
console.log(totalCost)
  try {
    let token = await getPayment(totalCost);
    return token;
  


    // let res = await axios.post(`${apiURL}/api/braintree/payment`, );
    // return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const createOrder = async (orderData) => {
  try {
    let res = await axios.post(`${apiURL}api/order/create-order`, orderData);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
