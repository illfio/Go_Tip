const knex = require("../db");

const Worker = {
  addWorker: async (userID, totalTipsReceived = 0) => {
    return knex("worker").insert({
      user_id: userID,
      total_tips_received: totalTipsReceived,
    });
  },
};

module.exports = Worker;
