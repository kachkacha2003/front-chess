import axios from "axios";
const apiURL = process.env.REACT_APP_API_URL;
const keyAPI=process.env.REACT_APP_API_KEY;
const clientID=process.env.REACT_APP_CLIENT_ID;
const clientSECRET=process.env.REACT_APP_CLIENT_SECRET;


export const getTbcToken = async () => {
  
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      apikey: `${keyAPI}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    

    },
    body: new URLSearchParams({
        'client_Id': `${clientID}`,
        'client_secret': `${clientSECRET}`
        
    })
  }
  try {
    
    // let res = await axios.post(`https://api.tbcbank.ge/v1/tpay/access-token`,options);
    let res = await axios.post(`https://api.tbcbank.ge/v1/tpay/access-token`,options);
    return res.access_token;
  } catch (error) {
    console.log(error);
  }
};
export const createPayment = async (token) => {
  
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      apikey:  `${keyAPI}`,
      'content-type': 'application/json',
      authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      amount: {currency: 'GEL', total: 1, subtotal: 0, tax: 0, shipping: 0},
      returnurl: 'https://test.ge/returnurl',
      extra: 'GE49TB7410945064300050',
      expirationMinutes: 12,
      methods: [5, 7],
      callbackUrl: 'https://test.ge/callback',
      language: 'KA',
      merchantPaymentId: `${clientID}`
    })
  };
  
  fetch('https://api.tbcbank.ge/v1/tpay/payments', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
};

export const getPaymentProcess = async () => {

  try {
    let token=await getTbcToken();

    

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
