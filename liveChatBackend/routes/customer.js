const express = require("express");
const router = express.Router();

const { CustomerController } = require("../controllers");
console.log("wrx");
//  @route POST customer
router.post("/", (req, res) => {
  CustomerController.saveCustomer(req.body, (err, customer) => {
    if (err) {
      res.status(400).json(err);
      console.log("dane");
      console.log(err);
    } else {
      res.status(200).json(customer);
    }
  });
});

module.exports = router;
