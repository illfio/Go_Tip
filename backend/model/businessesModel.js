const knex = require("../db");

const Business = {
  getBusiness: async () => {
    return knex("business").select("*");
  },
};

module.exports = Business;
