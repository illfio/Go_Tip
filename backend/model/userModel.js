const knex = require("../db");

const User = {
  getAllUsers: async () => {
    return knex.from("user").select("*");
  },

  addUser: async ({
    firstName,
    lastName,
    dob,
    email,
    phoneNumber,
    bio,
    bioImageUrl,
    userTypeID,
  }) => {
    return knex("user").insert({
      first_name: firstName,
      last_name: lastName,
      dob: dob,
      email: email,
      phone_number: phoneNumber,
      bio: bio,
      bio_image_url: bioImageUrl,
      user_type_id: userTypeID,
    });
  },
};

module.exports = User;
