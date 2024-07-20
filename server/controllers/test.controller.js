const sequelize = require('../config/database');
const Test = require("../models/test.model");

// Test route to create a new user
exports.createTestUser =  async (req, res) => {
    try {
      const { name, email } = req.body;
      const newUser = await Test.create({ name, email });
      console.log(newUser.dataValues)
      res.status(201).json(newUser);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  };


// Test route to get all users
exports.getTestUser =  async (req, res) => {
    try {
      const users = await Test.findAll();
      const userData = users.map(user => user.dataValues);
        // Extract only data values
      console.log(userData);  
      res.status(200).json(users);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  };