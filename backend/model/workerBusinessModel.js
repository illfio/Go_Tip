const knex = require("../db");

const WorkerBusiness = {
  addRoleID: async (userID, workerID, roleID) => {
    return knex("worker")
      .where({ user_id: userID, worker_id: workerID })
      .insert({ role_id: roleID });
  },
};

module.exports = WorkerBusiness;
