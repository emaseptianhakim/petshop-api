const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Penjualan = sequelize.define('Penjualan', {
  id_penjualan: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id_produk: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  jumlah: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'penjualan',
  timestamps: false
});

module.exports = Penjualan;
