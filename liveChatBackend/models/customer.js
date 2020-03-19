"use strict";
module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define(
    "Customer",
    {
      customer_name: {
        allowNull: false,
        type: DataTypes.STRING
      },
      customer_email: {
        allowNull: false,
        type: DataTypes.STRING
      },
      customer_phone: { allowNull: false, type: DataTypes.STRING }
    },
    {}
  );
  Customer.associate = function(models) {
    // associations can be defined here
  };
  return Customer;
};
