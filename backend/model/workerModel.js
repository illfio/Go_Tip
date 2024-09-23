const knex = require("../db");

const Worker = {
  addWorker: async (userID, workerRoleID, totalTipsReceived = 0) => {
    return knex("worker").insert({
      user_id: userID,
      role_id: workerRoleID,
      total_tips_received: totalTipsReceived,
    });
  },
};

module.exports = Worker;
