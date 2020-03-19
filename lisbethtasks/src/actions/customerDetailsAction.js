import axios from "axios";
import { POST_CUSTOMER_DETAILS } from "./types";

// FUNCTION FOR POSTING USER DETAILS
// dispatch sends data to the reducer

export const postCustomerDetails = userDetails => dispatch => {
  console.log(userDetails);
  let url = `customer`;

  axios
    .post(url, userDetails)
    .then(respose => {
      dispatch({
        type: POST_CUSTOMER_DETAILS,
        payload: respose.data
      });
      alert(respose.data.message);
    })
    .catch(err => {
      console.log(err.response.data);
    });
};
