const knex = require("../db");

const Business = {
  getBusinessInfo: async (businessID) => {
    return knex("business")
      .select(
        "business.business_name",
        "business.business_address",
        "business.business_phone_number",
        "business.business_image_url",
        "business.business_city_name",
        "business.business_city_zipcode",
        "business.business_state"
      )
      .where({ business_id: businessID })
      .first();
  },
};

module.exports = Business;
