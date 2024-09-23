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

  findGoogleEmailAndGoogleID: async ({ email, googleID }) => {
    return knex
      .from("users")
      .where({ email: email, google_user_id: googleID })
      .first();
  },

  updateGoogleID: async ({ email, googleID }) => {
    return knex("users")
      .where({ email: email })
      .andWhere(function () {
        this.whereNull("google_user_id");
      })
      .update({ google_user_id: googleID });
  },
};

module.exports = User;
