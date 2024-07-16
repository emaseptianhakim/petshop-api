const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Login = sequelize.define('Login', {
  user: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: false
  }
}, {
  tableName: 'login',
  timestamps: false
});

module.exports = Login;
