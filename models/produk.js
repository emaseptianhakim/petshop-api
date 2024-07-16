const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Produk = sequelize.define('Produk', {
  id_produk: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nama_produk: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  harga: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  stok_produk: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'produk',
  timestamps: false
});

module.exports = Produk;
