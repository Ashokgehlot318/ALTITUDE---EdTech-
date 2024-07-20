const { DataTypes } = require('sequelize');
const sequelize = require('./db');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  accountType: {
    type: DataTypes.ENUM('Admin', 'Student', 'Instructor'),
    allowNull: false,
  },
  active: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  approved: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  additionalDetails: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Profiles',
      key: 'id',
    },
  },
  token: {
    type: DataTypes.STRING,
  },
  resetPasswordExpires: {
    type: DataTypes.DATE,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: true,
});

module.exports = User;
