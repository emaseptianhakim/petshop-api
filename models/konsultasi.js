const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Konsultasi = sequelize.define('Konsultasi', {
  no_konsultasi: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  kode_customer: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  kode_dokter: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  tgl_konsultasi: {
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
  tableName: 'konsultasi',
  timestamps: false
});

module.exports = Konsultasi;
