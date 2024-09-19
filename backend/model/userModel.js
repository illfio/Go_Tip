const knex = require("../db");

const User = {
  getAllUsers: async () => {
    return knex.from("users").select("*");
  },

  findEmail: async (email) => {
    return knex.from("users").where({ email: email }).first();
  },

  addUser: async ({
    firstName,
    lastName,
    dob,
    email,
    password,
    phoneNumber,
    bio,
    bioImageUrl,
    roleID,
  }) => {
    return knex("users").insert({
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password,
      phone_number: phoneNumber,
      bio: bio,
      bio_image_url: bioImageUrl,
      // role_id: roleID,
    });
  },

  loginUser: async () => {},
};

module.exports = User;
