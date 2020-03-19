import { POST_CUSTOMER_DETAILS } from "../actions/types";

const initialState = {
  postCustomerDetails: {}
};

export default function(state = initialState, action) {
  switch (action.payload) {
    case POST_CUSTOMER_DETAILS:
      return {
        ...state,
        postCustomerDetails: action.payload
      };
    default:
      return state;
  }
}
