const validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateCustomerInput(data) {
  let errors = {};
  data.customer_name = !isEmpty(data.customer_name) ? data.customer_name : "";
  data.customer_email = !isEmpty(data.customer_email)
    ? data.customer_email
    : "";
  data.customer_phone = !isEmpty(data.customer_phone)
    ? data.customer_phone
    : "";
  //data.question_message = !isEmpty(data.question_message) ?  data.question_message: "";

  if (validator.isEmpty(data.customer_name)) {
    errors.customer_name = "Name is required";
  }
  if (validator.isEmpty(data.customer_email)) {
    errors.customer_email = "Email is required";
  }
  if (validator.isEmpty(data.customer_phone)) {
    errors.customer_phone = "Phone is required";
  }
  //   if (validator.isEmpty(data.question_message)) {
  //     errors.question_name = "Message is required";
  //   }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
