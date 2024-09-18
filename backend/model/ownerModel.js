const knex = require("../db");

const Owner = {
  addOwner: async (userID) => {
    return knex("owner").insert({ user_id: userID });
  },
};

module.exports = Owner;
