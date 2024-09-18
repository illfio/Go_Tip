const knex = require("../db");

const Customer = {
  addCustomer: async (userID, tipsGiven = 0) => {
    return knex("customer").insert({ user_id: userID, tips_given: tipsGiven });
  },
};

module.exports = Customer;
