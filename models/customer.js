const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Customer = sequelize.define('Customer', {
  id_customer: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nama: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  alamat: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  notelp: {
    type: DataTypes.STRING(15),
    allowNull: false
  },
  jenis_hewan: {
    type: DataTypes.STRING(50),
  }
});
module.exports = Customer;