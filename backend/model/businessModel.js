const knex = require("../db");

const Business = {
  getBusiness: async () => {
    return knex("business").select("*");
  },

  getWorkersInBusiness: async (businessID) => {
    return knex("worker_business")
      .select(
        "user.first_name",
        "user.last_name",
        "user.bio_image_url",
        "roles.role_name"
      )
      .leftJoin("worker", "worker_business.worker_id", "worker.worker_id")
      .leftJoin("user", "worker.user_id", "user.user_id")
      .leftJoin("roles", "worker.role_id", "roles.role_id")
      .where({ business_id: businessID });
  },
};

module.exports = Business;
