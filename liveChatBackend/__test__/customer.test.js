const request = require("supertest");
const app = require("../app");
const sequelize = require("sequelize");
const op = sequelize.op;

const Customer = require("../models").Customer;

const newCustomer = {
  customer_name: "British Leyland",
  customer_email: "landroverowner@yahoo.com",
  customer_phone: "+447911123456",
  created_at: new Date(),
  updated_at: new Date()
};

jest.setTimeout(15000);

describe("customer", () => {
  test("Should save a customer", done => {
    Customer.destroy({
      where: {
        customer_email: newCustomer.customer_email
      }
    })
      .then(() => {
        request(app)
          .post("/customer")
          .send(newCustomer)
          .end((err, res) => {
            if (err) {
              return done(err);
            } else {
              Customer.findOne({
                where: {
                  customer_email: newCustomer.customer_email
                }
              })
                .then(dbCustomer => {
                  // console.log("Cayman");
                  // console.log(dbCustomer);
                  expect(res.statusCode).toBe(200);
                  expect(res.body.message).toBe("Success");
                  expect(dbCustomer.customer_name).toBe("British Leyland");
                  expect(dbCustomer.customer_email).toBe(
                    "landroverowner@yahoo.com"
                  );
                  Customer.destroy({
                    where: {
                      customer_email: newCustomer.customer_email
                    }
                  })
                    .then(() => {
                      done();
                    })
                    .catch(err => {
                      return done(err);
                    });
                })
                .catch(err => {
                  return done(err);
                });
            }
          });
      })
      .catch(err => {
        return done(err);
      });
  });
  test("Should return error if empty fields are provided", done => {
    request(app)
      .post("/customer")
      .send({
        customer_name: "",
        customer_phone: "",
        customer_email: ""
      })
      .end((err, res) => {
        // console.log("boerboel");
        // console.log(res.body);
        if (err) {
          return done(err);
        } else {
          const error = res.body.error;
          expect(res.statusCode).toBe(400);
          expect(error.customer_name).toBe("Name is required");
          expect(error.customer_email).toBe("Email is required");
          expect(error.customer_phone).toBe("Phone is required");
          done();
        }
      });
  });
});
