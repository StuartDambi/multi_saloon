const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/User");

class UserController {

  /**
   * Register new User
   * @param {import("express").Response} res 
   * @param {import("express").Request} req 
   * @returns Registers a new user
   */
  static async registerUser(req, res) {
    try {
      const { email, password, username, role } = req.body;
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      const user = new User({
        _id: mongoose.Types.ObjectId(),
        email,
        username,
        role,
        password: hashedPassword,
      });

      const userExists = await User.find({ email });
      if (userExists.length > 0) {
        return res.status(409).json({
          status: res.statusCode,
          message: `user with email ${userExists[0].email} already exists`,
        });
      } else {
        user.save();
        return res.status(201).json({
          status: res.statusCode,
          message: "successfully registered user",
        });
      }
    } catch (error) {
      return res.status(500).json({
        status: res.statusCode,
        message: "something went wrong",
        error,
      });
    }
  }

}

module.exports = UserController;
