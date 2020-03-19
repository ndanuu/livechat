const sequelize = require("sequelize");
const Op = sequelize.Op;
const Customer = require("../models").Customer;

const {
  createError,
  validateCustomerInput,
  isEmpty
} = require("../validation");

module.exports = {
  findCustomer(where, result) {
    // console.log("supra");
    // console.log(where);
    Customer.findOne({
      raw: true,
      where: where
    })
      .then(fetchedCustomer => {
        return result(null, fetchedCustomer);
      })
      .catch(err => {
        result(err, null);
      });
  },
  saveCustomer(reqCustomer, result) {
    // console.log("pagani");
    // console.log(reqCustomer);
    const { errors, isValid } = validateCustomerInput(reqCustomer);
    // console.log("hurucan");
    // console.log(reqCustomer);
    if (!isValid) {
      const customError = createError(errors);
      result(customError, null);
    } else {
      this.findCustomer(
        {
          customer_name: reqCustomer.customer_name,
          customer_email: reqCustomer.customer_email
        },
        (err, dbCustomer) => {
          if (err) {
            const customError = createError(err);
            result(customError, null);
          } else {
            if (dbCustomer) {
              const customError = createError({
                customer: "Customer already exist"
              });
              result(customError, null);
            } else {
              Customer.create({
                customer_name: reqCustomer.customer_name,
                customer_email: reqCustomer.customer_email,
                customer_phone: reqCustomer.customer_phone,
                customer_message: reqCustomer.customer_message
              })
                .then(() => {
                  result(null, {
                    message: "Success"
                  });
                })
                .catch(err => {
                  const customError = createError(err);
                  result(customError, null);
                });
            }
          }
        }
      );
    }
  }
};
