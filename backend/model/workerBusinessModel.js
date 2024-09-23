const knex = require("../db");

const WorkerBusiness = {
  getWorkersInBusiness: async (businessID) => {
    return knex("worker_business")
      .select(
        "users.first_name",
        "users.last_name",
        "users.bio_image_url",
        "roles.role_name"
      )
      .leftJoin("worker", "worker_business.worker_id", "worker.worker_id")
      .leftJoin("users", "worker.user_id", "users.user_id")
      .leftJoin("roles", "worker.role_id", "roles.role_id")
      .where({ business_id: businessID });
  },
};

module.exports = WorkerBusiness;
