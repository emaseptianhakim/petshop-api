const sequelize = require('../config/database');
const Login = require('./login');
const Produk = require('./produk');
const Penjualan = require('./penjualan');
const Customer = require('./customer');
const Dokter = require('./dokter');
const Konsultasi = require('./konsultasi');

// Define relationships
Customer.hasMany(Konsultasi, { foreignKey: 'kode_customer' });
Konsultasi.belongsTo(Customer, { foreignKey: 'kode_customer' });

Dokter.hasMany(Konsultasi, { foreignKey: 'kode_dokter' });
Konsultasi.belongsTo(Dokter, { foreignKey: 'kode_dokter' });

Produk.hasMany(Penjualan, { foreignKey: 'id_produk' });
Penjualan.belongsTo(Produk, { foreignKey: 'id_produk' });

// const models = {
//   Login,
//   Produk,
//   Penjualan,
//   Customer,
//   Dokter,
//   Konsultasi
// };

// module.exports = { sequelize, models };

module.exports = {
    sequelize,
    Login,
    Produk,
    Penjualan,
    Customer,
    Dokter,
    Konsultasi
};