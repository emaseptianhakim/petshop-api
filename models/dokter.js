const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Dokter = sequelize.define('Dokter', {
  id_dokter: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nama: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  umur: {
    type: DataTypes.INTEGER,
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
  jabatan: {
    type: DataTypes.STRING(50),
    allowNull: false
  }
}, {
  tableName: 'dokter',
  timestamps: false
});

module.exports = Dokter;
